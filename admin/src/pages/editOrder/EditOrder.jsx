import "./editOrder.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import axios from "axios"
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import { useRef } from "react";

const EditProject = () => {
  const ref = useRef(null);
  const [info, setInfo] = useState({})
  const {orderId} = useParams();
  const {data, loading, error} = useFetch(`/order/find/${orderId}`);

  const [categories, setCategories] = useState([]);
  const [packetName, setPacketName] = useState('');


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/packet');
        setCategories(response.data);
      } catch (error) {
        // Xử lý lỗi
      }
    };
    fetchCategories();
  }, []);

  const navigate = useNavigate();

  const ArrayData = [data];
  
  const handleChange = (e) => {
    if (e.target.id === 'packetId') {
      const selectedOption = e.target.options[e.target.selectedIndex];
      setPacketName(selectedOption.text);
    }
    setInfo((prev) => ({...prev, [e.target.id]: e.target.value}));
  };
  

  const [userLocal, setUserLocal] = useState([]);
  // Lấy thông tin người dùng từ API khi trang tải
  useEffect(() => {
    const userJson = localStorage.getItem('user');
    const user = JSON.parse(userJson);
    if (user && user._id) {
        const userId = user._id;
        axios.get(`/users/${userId}`, {withCredentials: true})
        .then(response => {
            setUserLocal(response.data);
            localStorage.setItem('userId', response.data._id);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }
 }, []);

 console.log(packetName);

  const handleClick = async e => {
    e.preventDefault();
    try {
     
      const updateProject = {
        ...info, 
        userId: userLocal._id,
        packetName: packetName,
      };

      await axios.put(`/order/${orderId}`, updateProject);

      alert('Sửa thành công!');
      // Quay lại trang trước
      navigate(-1);
    } catch (err) {
      alert("Sửa thất bại !!! Có thể trùng dặp dữ liệu hoặc lỗi sever");
      console.log(err);
    }
  }

  console.log(info);

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Edit Order</h1>
        </div>
        <div className="bottom">
          <div className="right">
          {ArrayData.map(item =>  (
            <form key={item._id} item={item}>
                <div className="formInput">
                    <label>Customer Name</label>
                    <input onChange={handleChange} ref={ref} 
                    value={info.customerName || item.customerName}
                    id="customerName"
                  />
                   <div className="formInput">
                    <label>Address</label>
                    <input onChange={handleChange} ref={ref} 
                    value={info.address || item.address}
                    id="address"
                  />
                  </div>
                  <div className="formInput">
                    <label>Phone Number</label>
                    <input onChange={handleChange} ref={ref} 
                    value={info.phoneNumber || item.phoneNumber}
                    id="phoneNumber"
                  />
                  </div>
                  </div>
                  <div className="formInput">
                    <label>status</label>
                    <select onChange={handleChange} ref={ref} 
                    id="status">
                    <option value=''>Chọn</option>
                    <option value='Thành công'>Thành công</option>
                    <option value='Hủy'>Hủy</option>
                  </select>
                  </div>
                  <div className="formInput">
                    <label>Amount</label>
                    <input onChange={handleChange} ref={ref} 
                    value={info.amount || item.amount} 
                    id="amount"
                  />
                  </div>
                  <div className="formInput">
                    <label>Cancel Reason</label>
                    <textarea onChange={handleChange} ref={ref} 
                    value={info.cancelReason || item.cancelReason} 
                    id="cancelReason"
                  />
                  </div>
                  <div className="formInput">
                  <label>Choose a packet</label>
                  <select id="packetId" onChange={handleChange}> 
                  <option value=''> Packet </option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                 </select>
                </div>
              <button onClick={handleClick}>Send</button>
            </form>
             )) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProject;
