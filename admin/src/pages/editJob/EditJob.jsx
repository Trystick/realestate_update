import "./editJob.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import axios from "axios"
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import { useRef } from "react";

const EditJob = () => {
  const ref = useRef(null);
  // const [filed, setFiled] = useState("");
  const [info, setInfo] = useState({})
  const {jobId} = useParams();
  const {data, loading, error} = useFetch(`/job/find/${jobId}`);
  console.log(data);
  const [jobCategories, setJobCategories] = useState([]);

  useEffect(() => {
    const fetchJobCategories = async () => {
      try {
        const response = await axios.get('/jobCategory');
        setJobCategories(response.data);
      } catch (error) {
        // Xử lý lỗi
      }
    };
    fetchJobCategories();
  }, []);

  const navigate = useNavigate();

  const ArrayData = [data];
  
  const handleChange = (e) => {
    setInfo((prev) => ({...prev, [e.target.id]: e.target.value}));
  };

  const handleClick = async e => {
    e.preventDefault();
    try {
    //   const list = await Promise.all(
    //     Object.values(filed).map( async (file) => {
    //     const data = new FormData();
    //     data.append("file", file);
    //     data.append("upload_preset", "upload");
    //     const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dw1rf0o5f/image/upload", data);
    //     const {url} = uploadRes.data;
       
    //     return url;
    // }));
    
      const updateJob = {
        ...info, 
        // photos: list,
      };

      await axios.put(`/job/${jobId}`, updateJob);

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
          {/* <div className="left">
            <img
              src={
                 filed
                  ? URL.createObjectURL(filed[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div> */}
          <div className="right">
          {ArrayData.map(item =>  (
            <form key={item._id} item={item}>
              {/* <div className="formInput" >
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
              </div> */}
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
                    <label>Number</label>
                    <input onChange={handleChange} ref={ref} 
                    value={info.number || item.number}
                    id="number"
                  />
                  </div>
                  </div>
                  <div className="formInput">
                    <label>Date end</label>
                    <input onChange={handleChange} ref={ref} 
                    value={info.dateend || item.dateend}
                    id="dateend"
                  />
                  </div>
                  <div className="formInput">
                    <label>Description</label>
                    <input onChange={handleChange} ref={ref} 
                    value={info.desc || item.desc}
                    id="desc"
                  />
                  </div>
                  <div className="formInput">
                    <label>Gender</label>
                    <input onChange={handleChange}ref={ref}  
                    value={info.gender || item.gender}
                    id="gender"
                  />
                  </div>
                  <div className="formInput">
                    <label>Age</label>
                    <input onChange={handleChange} ref={ref} 
                    value={info.age || item.age}
                    id="age"
                  />
                  </div>
                  <div className="formInput">
                    <label>Level</label>
                    <input onChange={handleChange} ref={ref} 
                    value={info.level || item.level}
                    id="level"
                  />
                  </div>
                  <div className="formInput">
                    <label>Experience</label>
                    <input onChange={handleChange} ref={ref} 
                    value={info.experience || item.experience}
                    id="experience"
                  />
                  </div>
                  <div className="formInput">
                    <label>Request</label>
                    <input onChange={handleChange} ref={ref} 
                    value={info.request || item.request}
                    id="request"
                  />
                  </div>
                  <div className="formInput">
                    <label>income</label>
                    <input onChange={handleChange} ref={ref} 
                    value={info.income || item.income}
                    id="income"
                  />
                  </div>
                  <div className="formInput">
                    <label>Regime</label>
                    <input onChange={handleChange} ref={ref} 
                    value={info.regime || item.regime}
                    id="regime"
                  />
                  </div>
                  <div className="formInput">
                  <label>Choose job category</label>
                  <select id="jobCategoryId" onChange={handleChange}> 
                  <option>Job Category </option>
                  {jobCategories.map((jobCategory) => (
                    <option key={jobCategory._id} value={jobCategory._id}>
                      {jobCategory.name}
                    </option>
                  ))}
                 </select>
                </div>
              <button onClick={handleClick} >Send</button>
            </form>
             )) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditJob;
