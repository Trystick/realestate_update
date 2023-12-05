import './assign.css'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Assign = () => {
    const [role, setRole] = useState({});
    const [modules, setModules] = useState([]);
    const {assignId} = useParams();
    const navigate = useNavigate();

   useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`/role/${assignId}`);
            setRole(response.data);
            setModules(response.data.modules);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    fetchData();
}, [assignId]);

  
    const handleModuleChange = (event) => {
        const { value } = event.target;
        setModules(prevModules => {
            if (prevModules.includes(value)) {
                return prevModules.filter(module => module !== value);
            } else {
                return [...prevModules, value];
            }
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await axios.post('/role/assign', { role: role.name, modules });
            alert('Role assigned successfully!');
            navigate(-1);
        } catch (error) {
            console.error("Error submitting data: ", error);
        }
    };

    const moduleDescriptions = {
        'home': 'Trang chủ',
        'admins': 'Tài khoản Admin',
        'users': 'Tài khoản User',
        "category":"Danh mục dự án",
        "project":"Dự án",
        "landSaleCategory":"Danh mục nhà bán",
        "landSale":"Nhà Bán",
        "landLeaseCategory":"Danh mục nhà thuê",
        "landLease":"Nhà thuê",
        "advise":"Tư vấn",
        "order":"Đơn hàng",
        "payment":"Thanh toán",
        "postCategory":"Danh mục tin tức",
        "post":"Tin tức",
        "packetType":"Danh mục gói thanh toán",
        "packet":"Gói thanh toán",
        "jobCategory":"Danh mục việc làm",
        "job":"Việc làm",
        "jobApply":"Thông tin ứng tuyển",
        "slide":"Hình ảnh",
        "role":"Phân quyền",
        // Add descriptions for the rest of your modules here
    };

  return (
    <div className='assign'>    
      <Sidebar />
      <div className="assignContainer">
        <Navbar/>
        <div className="top">
          <h1>Assign</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <h1>Assign Role: {role.name}</h1>

            <div className="formContainer">
                <div className="moduleColumn">
                    <h2>Assign Route</h2>
                    {Object.keys(moduleDescriptions).map(module => (
                        <div key={module}>
                            <input
                                type="checkbox"
                                id={module}
                                value={module}
                                checked={modules.includes(module)}
                                onChange={handleModuleChange}
                                className='inpcheck'
                            />
                            <label htmlFor={module}>{module}</label>
                        </div>
                    ))}
                </div>

                <div className="descriptionColumn">
                    <h2>Assign Description</h2>
                    {Object.values(moduleDescriptions).map(description => (
                        <p key={description} className='pdesc'>{description}</p>
                    ))}
                </div>
            </div>

            <button type="submit">Assign Role</button>
        </form>
      </div>
    </div>
  )
}

export default Assign
