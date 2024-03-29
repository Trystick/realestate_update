import { useEffect, useState } from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import SearchTop from '../../components/search/SearchTop'
import './landsale.css'
import useFetch from '../../hooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ScrollToTop from "../../components/scrolltop/ScrollToTop"
import FavoriteButton from '../../components/favorite/FavoriteButton'

const LandSale = () => {

  const {data, loading, error} = useFetch(`http://localhost:8800/api/slide`);
  
  console.log(data);

  const img = data.map(item => item.photos).flat();

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Cập nhật hàm nextSlide và previousSlide cho mảng img
  const nextImgSlide = () => {
    const lastIndex = img.length - 1;
    const shouldResetIndex = currentImgIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImgIndex + 1;
    setCurrentImgIndex(index);
  };

  const previousImgSlide = () => {
    const lastIndex = img.length - 1;
    const shouldResetIndex = currentImgIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImgIndex - 1;
    setCurrentImgIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const lastIndex = img.length - 1;
      const shouldResetIndex = currentImgIndex === lastIndex;
      const index = shouldResetIndex ? 0 : currentImgIndex + 1;
      setCurrentImgIndex(index);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImgIndex]);

  const [houses, setHouses] = useState([]);
  const [users, setUsers] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    axios.get('http://localhost:8800/api/landSale/userlandsale', {withCredentials: true}) // api lấy thông tin nhà bán phía client
      .then(response => {
        setHouses(response.data);
        // Lấy danh sách userId duy nhất từ dữ liệu
        const userIds = [...new Set(response.data.map(house => house.userId))];
        console.log(userIds);
        // Gọi API để lấy thông tin người dùng
        const userPromises = userIds.map(userId =>
          axios.get(`http://localhost:8800/api/users/${userId}`, {withCredentials: true})
        );
        Promise.all(userPromises)
          .then(userResponses => {
            const users = userResponses.reduce((acc, response) => {
              acc[response.data._id] = response.data;
              return acc;
            }, {});
            setUsers(users);
          })
          .catch(error => {
            console.error('There was an error!', error);
          });
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  //phân trang
  const pageCount = Math.ceil(houses.length / itemsPerPage);

  // Cập nhật trang hiện tại
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const currentItems = houses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  //hàm chuyển đổi ngày tháng
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}/${month}/${year}`;
  }

  const [userLocal, setUserLocal] = useState([]);
  // Lấy thông tin người dùng từ API khi trang tải
  useEffect(() => {
    const userJson = localStorage.getItem('user');
    const user = JSON.parse(userJson);
    if (user && user._id) {
        const userId = user._id;
        axios.get(`http://localhost:8800/api/users/${userId}`, {withCredentials: true})
        .then(response => {
            setUserLocal(response.data);
            localStorage.setItem('userId', response.data._id);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }
 }, []);

 console.log(userLocal);
  return (
    <div className='landSaleContainer'>
      <Header/>
      {data.map(item => (
      <div className="landsalepage" key={item._id}>
         <div className="slidetiendo" >
            <button className="arrow arrow-left" onClick={previousImgSlide}>&#10094;</button>
                <img src={img[currentImgIndex]} alt='Không có dữ liệu' className="imgslide"/>
                <button className="arrow arrow-right" onClick={nextImgSlide}>&#10095;</button>
          </div>
      </div>
       ))}
        <div className='homepage'>
                <Link to="/"><FontAwesomeIcon icon={faHouse} className="iconhome"/></Link>
                <span>&gt;</span>
                <p>Nhà bán</p>
        </div>
      <div className="titlelandsale">
          <h2 className='landsaletitle'>Nhà Bán</h2>
       </div>
      <div className="searchTopLand">
        <SearchTop/>
      </div>
      <div className="contentListLandSale">
        <div className="leftcontentlandsale">
            <div className="categorytilte">
                Tất cả nhà bán
            </div>
        {currentItems.map((house) => (
          <Link to={`/landsale/${house._id}`} key={house._id} className='linklandsale'>
          <div className="itemlandsale">
            <div className="picturelandsale">
              <div className="leftpicture">
                <img src={house.photos[0]} alt="" className='imgleftpicture'/>
              </div>
              <div className="grouppicture">
                <div className="toppicture">
                <img src={house.photos[1]} alt="" className='imgtoppicture'/>
                </div>
                <div className="groupbotompicture">
                  <div className="leftbottompicture">
                  <img src={house.photos[2]} alt="" className='imgleftbottompicture' />
                  </div>
                  <div className="rightbottompicture">
                  <img src={house.photos[3]} alt="" className='imgrightbottompicture'/>
                  </div>
                </div>
              </div>
            </div>
            <div className="detaillandsale">
              <div className="detaildeslandsale">
                {house.name}
              </div>
              <div className="chacralandsale">
                <div className="pricelandsale">{house.price} tỷ</div>
                <div className="arealandsale">{house.area} m<sup>2</sup></div>
                <div className="bedroom">{house.room} <span>phòng ngủ</span></div>
                <div className="toilet">{house.toilet} <span>nhà vệ sinh</span></div>
                <div className="adress">{house.location}</div>
              </div>
              <div className="descdetaillandsale">
                 {house.title}
              </div>
            </div>
            <div className="avatarphone">
              <div className="leftavatar">
                <img src={users[house.userId]?.img}  alt="" className="avatarlandsale" />
                <div className="nameavatarlandsale">{users[house.userId]?.username}</div>
                <div className="nameavatarlandsale">{formatDate(house.createdAt)}</div>
              </div>
              <div className="rightphoneandlike">
                <div className="phonelandsale">
                  <FontAwesomeIcon icon={faPhone} className='iconphonelandsale'/>
                  {users[house.userId]?.phoneNumber}
                </div>
                <FavoriteButton userId={userLocal._id} landsaleId={house._id} onClick={(event) => event.stopPropagation()}/>
              </div>
            </div>
          </div>
        </Link>
        ))}
        </div>
      </div>
      <div className="pagination">
        {[...Array(pageCount)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <ScrollToTop/>
      <Footer/>
    </div>
  )
  
}

export default LandSale
