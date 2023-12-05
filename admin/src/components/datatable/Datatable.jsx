import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch"
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import { orderColumns } from '../../datatablesource';

const Datatable = ({columns}) => {
  const location = useLocation();
  const [totalAmount, setTotalAmount] = useState(0);
  const path = location.pathname.split("/")[1];
  let apiPath;
  if (path === 'users') {
    apiPath = '/users/users/users';
  } else if (path === 'admins')
    apiPath = '/users/admins/admins';
  else {
    apiPath = `/${path}`;
  }
  const {data, loading, error} = useFetch(apiPath)
  const [list, setList] = useState([]);

  const [deleteSuccess, setDeleteSuccess] = useState(false);

  useEffect(() => {
    setList(data)
  }, [data])

  useEffect(() => {
    fetch(apiPath)
      .then(response => response.json())
      .then(data => {
        setList(data);
        if (path === 'order') {
          const total = data.reduce((sum, order) => {
            return order.status === 'Thành công' ? sum + order.amount : sum;
          }, 0);
          setTotalAmount(total);
        }
      })
      .catch(error => {
        console.error('Có lỗi xảy ra:', error);
      });
  }, [path]);

  const handleDelete = async(id, categoryId, postCategoryId, jobCategoryId, categoryLandSaleId, categoryLandLeaseId, packetTypeId) => {
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }  
    let apiPath;
    if (path === 'admins') {
      apiPath = 'users';
    } 
    else {
      apiPath = `/${path}`;
    }

    try {
      if (categoryId) {
        // Delete project
        await axios.delete(`${apiPath}/${id}/${categoryId}`);
        setList(list.filter((item) => item.projectId !== id));
      } else if (postCategoryId){
        // Delete post
        await axios.delete(`${apiPath}/${id}/${postCategoryId}`);
        setList(list.filter((item) => item.postId !== id));
      }
      else if (jobCategoryId){
      // Delete job
      await axios.delete(`${apiPath}/${id}/${jobCategoryId}`);
      setList(list.filter((item) => item.jobId !== id));
      }
      else if (categoryLandSaleId){
        // Delete job
        await axios.delete(`${apiPath}/${id}/${categoryLandSaleId}`);
        setList(list.filter((item) => item.landSaleId !== id));
      }
      else if (categoryLandLeaseId){
        // Delete job
        await axios.delete(`${apiPath}/${id}/${categoryLandLeaseId}`);
        setList(list.filter((item) => item.landLeaseId !== id));
      }
      else if (packetTypeId){
        // Delete job
        await axios.delete(`${apiPath}/${id}/${packetTypeId}`);
        setList(list.filter((item) => item.packetId !== id));
      }
      else {
        // Delete category
        await axios.delete(`${apiPath}/${id}`);
        setList(list.filter((item) => item._id !== id));
      }
      setDeleteSuccess(true);
      alert("Xóa thành công")
      window.location.reload()
    } catch (err) {
      
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/${path}/edit/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">Edit</div>
            </Link>
            {path === 'role' && (
            <Link to={`/${path}/assign/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="assignButton">Phân quyền</div>
            </Link>
            )}
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id, params.row.categoryId, params.row.postCategoryId, params.row.jobCategoryId, params.row.categoryLandSaleId, params.row.categoryLandLeaseId, params.row.packetTypeId)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];


  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      {path === 'order' && 
        <div style={{
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#4caf50',
          textAlign: 'right',
          padding: '10px',
          borderTop: '1px solid #ddd',
          marginTop: '10px',
        }}>
          TOTAL AMOUNT SUCCESS : {totalAmount.toLocaleString()} VND
        </div>
      }
      <DataGrid
       className="datagrid"
       rows={list}
       columns={columns.concat(actionColumn)}
      
       pageSize={9}
       rowsPerPageOptions={[9]}
       checkboxSelection
       getRowId={(row) => row._id}
       getRowCategoryId={(row) => row.categoryId}
      />
     
    </div>
  );
};

export default Datatable;
