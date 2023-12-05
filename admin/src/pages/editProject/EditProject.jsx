import "./editProject.scss";
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
  const [filed, setFiled] = useState("");
  const [info, setInfo] = useState({})
  const {projectId} = useParams();
  const {data, loading, error} = useFetch(`/project/find/${projectId}`);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/category');
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
    setInfo((prev) => ({...prev, [e.target.id]: e.target.value}));
  };
  console.log(filed);
  const handleClick = async e => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(filed).map( async (file) => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dw1rf0o5f/image/upload", data);
        const {url} = uploadRes.data;
       
        return url;
    }));
    
      const updateProject = {
        ...info, 
        photos: list,
      };

      await axios.put(`/project/${projectId}`, updateProject);

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
          <h1>Edit Project</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                 filed
                  ? URL.createObjectURL(filed[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
          {ArrayData.map(item =>  (
            <form key={item._id} item={item}>
              <div className="formInput" >
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiled(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>
                <div className="formInput">
                    <label>Name</label>
                    <input onChange={handleChange} ref={ref} 
                    value={info.name || item.name}
                    id="name"
                  />
                   <div className="formInput">
                    <label>Location</label>
                    <input onChange={handleChange} ref={ref} 
                    value={info.location || item.location}
                    id="location"
                  />
                  </div>
                  <div className="formInput">
                    <label>Description Location</label>
                    <textarea onChange={handleChange} ref={ref} 
                    value={info.descLocation || item.descLocation}
                    id="descLocation"
                  />
                  </div>
                  </div>
                  <div className="formInput">
                    <label>Investor</label>
                    <input onChange={handleChange} ref={ref} 
                    value={info.investor || item.investor}
                    id="investor"
                  />
                  </div>
                  <div className="formInput">
                    <label>Construction</label>
                    <input onChange={handleChange} ref={ref} 
                    value={info.construction || item.construction}
                    id="construction"
                  />
                  </div>
                  <div className="formInput">
                    <label>Land Area</label>
                    <input onChange={handleChange}ref={ref}  
                    value={info.land_area || item.land_area}
                    id="land_area"
                  />
                  </div>
                  <div className="formInput">
                    <label>Scale</label>
                    <input onChange={handleChange} ref={ref} 
                    value={info.scale || item.scale}
                    id="scale"
                  />
                  </div>
                  <div className="formInput">
                    <label>Utiliti</label>
                    <input onChange={handleChange} ref={ref} 
                    value={info.utiliti || item.utiliti}
                    id="utiliti"
                  />
                  </div>
                  <div className="formInput">
                    <label>Description Utiliti In</label>
                    <textarea onChange={handleChange} ref={ref} 
                    value={info.descUtilitiIn || item.descUtilitiIn}
                    id="descUtilitiIn"
                    />
                    </div>
                  <div className="formInput">
                    <label>Description Utiliti In Second</label>
                    <textarea onChange={handleChange} ref={ref} 
                    value={info.descUtilitiInSe || item.descUtilitiInSe}
                    id="descUtilitiInSe"
                    />
                    </div>
                   <div className="formInput">
                    <label>Description Utiliti In Third</label>
                    <textarea onChange={handleChange} ref={ref} 
                    value={info.descUtilitiInTh || item.descUtilitiInTh}
                    id="descUtilitiInTh"
                  />
                  </div>
                  <div className="formInput">
                    <label>Description Utiliti In Four</label>
                    <textarea onChange={handleChange} ref={ref} 
                    value={info.descUtilitiInFo || item.descUtilitiInFo}
                    id="descUtilitiInFo"
                  />
                  </div>
                  <div className="formInput">
                    <label>Description Utiliti In Five</label>
                    <textarea onChange={handleChange} ref={ref} 
                    value={info.descUtilitiInFi || item.descUtilitiInFi}
                    id="descUtilitiInFi"
                  />
                  </div>
                  <div className="formInput">
                    <label>Description Utiliti Out</label>
                    <textarea onChange={handleChange} ref={ref} 
                    value={info.descUtilitiOut || item.descUtilitiOut}
                    id="descUtilitiOut"
                    />
                    </div>
                   <div className="formInput">
                    <label>Description Utiliti Out Second</label>
                    <textarea onChange={handleChange} ref={ref} 
                    value={info.descUtilitiOutSe || item.descUtilitiOutSe}
                    id="descUtilitiOutSe"
                    />
                    </div>
                   <div className="formInput">
                    <label>Description Utiliti Out Third</label>
                    <textarea onChange={handleChange} ref={ref} 
                    value={info.descUtilitiOutTh || item.descUtilitiOutTh}
                    id="descUtilitiOutTh"
                  />
                  </div>
                  <div className="formInput">
                    <label>Description Utiliti Out Four</label>
                    <textarea onChange={handleChange} ref={ref} 
                    value={info.descUtilitiOutFo || item.descUtilitiOutFo}
                    id="descUtilitiOutFo"
                  />
                  </div>
                  <div className="formInput">
                    <label>Description Utiliti Out Five</label>
                    <textarea onChange={handleChange} ref={ref} 
                    value={info.descUtilitiOutFi || item.descUtilitiOutFi}
                    id="descUtilitiOutFi"
                  />
                  </div>
                  <div className="formInput">
                    <label>Ground</label>
                    <textarea onChange={handleChange} ref={ref} 
                    value={info.ground || item.ground}
                    id="ground"
                    />
                    </div>
                   <div className="formInput">
                    <label>Ground Second</label>
                    <textarea onChange={handleChange} ref={ref} 
                    value={info.groundSe || item.groundSe}
                    id="groundSe"
                    />
                    </div>
                   <div className="formInput">
                    <label>Ground Third</label>
                    <textarea onChange={handleChange} ref={ref} 
                    value={info.groundTh || item.groundTh}
                    id="groundTh"
                  />
                  </div>
                  <div className="formInput">
                    <label>Description Category</label>
                    <textarea onChange={handleChange} ref={ref} 
                    value={info.categoryDesc || item.categoryDesc}
                    id="categoryDesc"
                  />
                  </div>
                  <div className="formInput">
                    <label>Juridical</label>
                    <input onChange={handleChange} ref={ref} 
                    value={info.juridical || item.juridical}
                    id="juridical"
                  />
                  </div>
                  <div className="formInput">
                    <label>Price</label>
                    <input onChange={handleChange} ref={ref} 
                    value={info.price || item.price}
                    id="price"
                  />
                  </div>
                  <div className="formInput">
                    <label>Time Start</label>
                    <input onChange={handleChange} ref={ref} 
                    value={info.time_start || item.time_start}
                    id="time_start"
                  />
                  </div>
                  <div className="formInput">
                  <label>Choose a category</label>
                  <select id="categoryId" onChange={handleChange}> 
                  <option> Category </option>
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
