export const adminColumns = [
  { field: "_id", headerName: "ID", width: 170 },
  {
    field: "admin",
    headerName: "Admin",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "http://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "password",
    headerName: "Password",
    width: 230,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "role",
    headerName: "Role",
    width: 150,
    valueGetter: (params) => params.row.role.name,
  },
];


export const userColumns = [
  { field: "_id", headerName: "ID", width: 170 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "http://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "password",
    headerName: "Password",
    width: 230,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "role",
    headerName: "Role",
    width: 130,
    valueGetter: (params) => params.row.role.name,
  },
  {
    field: "type",
    headerName: "Type",
    width: 230,
  }
];


export const categoryColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "desc",
    headerName: "Desc",
    width: 230,
  },
  {
    field: "title",
    headerName: "Title",
    width: 100,
  },
];

export const projectColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "photos",
    headerName: "Photos",
    width: 150,
    renderCell: (params) => {
      return (
        <div>
          <img src={params.row.photos[1]} alt="photos"/>
        </div>
      );
    },
  },
  {
    field: "location",
    headerName: "Location",
    width: 100,
  },
  {
    field: "descLocation",
    headerName: "Description Location",
    width: 100,
  },
  {
    field: "investor",
    headerName: "Investor",
    width: 100,
  },
  {
    field: "construction",
    headerName: "Construction",
    width: 230,
  },
  {
    field: "land_area",
    headerName: "Land Area",
    width: 100,
  },
  {
    field: "scale",
    headerName: "Scale",
    width: 100,
  },
  {
    field: "utiliti",
    headerName: "Utiliti",
    width: 100,
  },
  {
    field: "descUtilitiIn",
    headerName: " Description Utiliti In",
    width: 100,
  },
  {
    field: "descUtilitiInSe",
    headerName: " Description Utiliti In",
    width: 100,
  },
  {
    field: "descUtilitiInTh",
    headerName: " Description Utiliti In",
    width: 100,
  },
  {
    field: "descUtilitiInFo",
    headerName: " Description Utiliti In",
    width: 100,
  },
  {
    field: "descUtilitiInFi",
    headerName: " Description Utiliti In",
    width: 100,
  },
  {
    field: "descUtilitiOut",
    headerName: "Description Utiliti Out",
    width: 100,
  },
  {
    field: "descUtilitiOutSe",
    headerName: "Description Utiliti Out",
    width: 100,
  },
  {
    field: "descUtilitiOutTh",
    headerName: "Description Utiliti Out",
    width: 100,
  },
  {
    field: "descUtilitiOutFo",
    headerName: "Description Utiliti Out",
    width: 100,
  },
  {
    field: "descUtilitiOutFi",
    headerName: "Description Utiliti Out",
    width: 100,
  },
  {
    field: "ground",
    headerName: "Ground",
    width: 100,
  },
  {
    field: "groundSe",
    headerName: "Ground",
    width: 100,
  },
  {
    field: "groundTh",
    headerName: "Ground",
    width: 100,
  },
  {
    field: "categoryDesc",
    headerName: "Description Category",
    width: 100,
  },
  {
    field: "juridical",
    headerName: "Juridical",
    width: 100,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "time_start",
    headerName: "Time Start",
    width: 100,
  },
  {
    field: "categoryId",
    headerName: "Category ID",
    width: 150,
  },
];

export const adviseColumns = [
  { field: "_id", headerName: "ID", width: 170 },
  {
    field: "fullname",
    headerName: "Fullname",
    width: 230,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 230,
  },
];

export const orderColumns = [
  { field: "_id", headerName: "ID", width: 170 },
  {
    field: "userId",
    headerName: "userId",
    width: 230,
  },
  {
    field: "packetId",
    headerName: "packetId",
    width: 230,
  },
  {
    field: "packetName",
    headerName: "Packet Name",
    width: 230,
  },
  {
    field: "customerName",
    headerName: "Customer Name",
    width: 230,
  },
  {
    field: "address",
    headerName: "Address",
    width: 230,
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 230,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 230,
    valueFormatter: (params) => params.value.toLocaleString(),
  },
  {
    field: "status",
    headerName: "Status",
    width: 230,
  },
  {
    field: "cancelReason",
    headerName: "Cancel Reason",
    width: 230,
  },
];


export const paymentColumns = [
  { field: "_id", headerName: "ID", width: 170 },
  {
    field: "userId",
    headerName: "userId",
    width: 230,
  },
  {
    field: "orderId",
    headerName: "orderId",
    width: 230,
  },
  {
    field: "packetName",
    headerName: "Packet Name",
    width: 230,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 230,
    valueFormatter: (params) => params.value.toLocaleString(),
  },
  {
    field: "status",
    headerName: "Status",
    width: 230,
  },
];

export const packetTypeColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "desc",
    headerName: "Desc",
    width: 230,
  },
  {
    field: "title",
    headerName: "Title",
    width: 100,
  },
];

export const packetColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "packetTypeId",
    headerName: "packetTypeId",
    width: 150,
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "timeend",
    headerName: "Time End",
    width: 150,
  },
  {
    field: "function",
    headerName: "Function",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Desc",
    width: 230,
  },
  {
    field: "price",
    headerName: "Price",
    width: 230,
  },
  {
    field: "title",
    headerName: "Title",
    width: 100,
  },
];
export const categoryLandSaleColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "desc",
    headerName: "Desc",
    width: 230,
  },
  {
    field: "title",
    headerName: "Title",
    width: 100,
  },
];

export const landSaleColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "userId",
    headerName: "userId",
    width: 150,
  },
  {
    field: "photos",
    headerName: "Photos",
    width: 150,
    renderCell: (params) => {
      return (
        <div>
          <img src={params.row.photos[1]} alt="photos"/>
        </div>
      );
    },
  },
  {
    field: "categoryLandSaleId",
    headerName: "categoryLandSaleId",
    width: 230,
  },
  {
    field: "name",
    headerName: "Name",
    width: 100,
  },
  {
    field: "location",
    headerName: "Location",
    width: 100,
  },
  {
    field: "area",
    headerName: "Area",
    width: 100,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 100,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 100,
  },
  {
    field: "nameContact",
    headerName: "Name contact",
    width: 100,
  },
  {
    field: "phoneContact",
    headerName: "Phone contact",
    width: 100,
  },
  {
    field: "emailContact",
    headerName: "Email contact",
    width: 100,
  },
  {
    field: "room",
    headerName: "Room",
    width: 100,
  },
  {
    field: "toilet",
    headerName: "Toilet",
    width: 100,
  },
];

export const categoryLandLeaseColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "desc",
    headerName: "Desc",
    width: 230,
  },
  {
    field: "title",
    headerName: "Title",
    width: 100,
  },
];

export const landLeaseColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "userId",
    headerName: "userId",
    width: 150,
  },
  {
    field: "photos",
    headerName: "Photos",
    width: 150,
    renderCell: (params) => {
      return (
        <div>
          <img src={params.row.photos[1]} alt="photos"/>
        </div>
      );
    },
  },
  {
    field: "categoryLandLeaseId",
    headerName: "categoryLandLeaseId",
    width: 230,
  },
  {
    field: "name",
    headerName: "Name",
    width: 100,
  },
  {
    field: "location",
    headerName: "Location",
    width: 100,
  },
  {
    field: "area",
    headerName: "Area",
    width: 100,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 100,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 100,
  },
  {
    field: "nameContact",
    headerName: "Name contact",
    width: 100,
  },
  {
    field: "phoneContact",
    headerName: "Phone contact",
    width: 100,
  },
  {
    field: "emailContact",
    headerName: "Email contact",
    width: 100,
  },
  {
    field: "room",
    headerName: "Room",
    width: 100,
  },
  {
    field: "toilet",
    headerName: "Toilet",
    width: 100,
  },
];

export const postCategoryColumns = [
  { field: "_id", headerName: "ID", width: 170 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "type",
    headerName: "Type",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 230,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
];

export const postColumns = [
  { field: "_id", headerName: "ID", width: 170 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "photos",
    headerName: "Photos",
    width: 150,
    renderCell: (params) => {
      return (
        <div>
          <img src={params.row.photos[0]} alt="photos" />
        </div>
      );
    },
  },
  {
    field: "descone",
    headerName: "Descriptionone",
    width: 230,
  },
  {
    field: "desctwo",
    headerName: "Descriptiontwo",
    width: 230,
  },
  {
    field: "descthree",
    headerName: "Descriptionthree",
    width: 230,
  },
  {
    field: "descfour",
    headerName: "Descriptionfour",
    width: 230,
  },
  {
    field: "descfive",
    headerName: "Descriptionfive",
    width: 230,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "postCategoryId",
    headerName: "PostCategory ID",
    width: 150,
  },
];

export const jobCategoryColumns = [
  { field: "_id", headerName: "ID", width: 170 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "type",
    headerName: "Type",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 230,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
];

export const jobColumns = [
  { field: "_id", headerName: "ID", width: 170 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "location",
    headerName: "Location",
    width: 230,
  },
  {
    field: "number",
    headerName: "Number",
    width: 230,
  },
  {
    field: "dateend",
    headerName: "Dateend",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 230,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 230,
  },
  {
    field: "level",
    headerName: "Level",
    width: 230,
  },
  {
    field: "experience",
    headerName: "Experience",
    width: 230,
  },
  {
    field: "request",
    headerName: "Request",
    width: 230,
  },
  {
    field: "income",
    headerName: "Income",
    width: 230,
  },
  {
    field: "regime",
    headerName: "Regime",
    width: 230,
  },
  {
    field: "jobCategoryId",
    headerName: "JobCategory ID",
    width: 150,
  },
];

export const jobApplyColumns = [
  { field: "_id", headerName: "ID", width: 170 },
  {
    field: "fullname",
    headerName: "Fullname",
    width: 180,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 140,
  },
  {
    field:"file",
    headerName:"File",
    width: 350,
  },
  {
    field: "namejob",
    headerName: "Job Name",
    width: 230,
  },
];

export const roleColumns = [
  { field: "_id", headerName: "ID", width: 170 },
  {
    field: "name",
    headerName: "Role Name",
    width: 200,
  },
  {
    field: "modules",
    headerName: "Modules",
    width: 250,
    valueGetter: (params) => params.row.modules.join(', '),
  },
];

export const slideColumns = [
  { field: "_id", headerName: "ID", width: 170 },
  {
    field: "photos1",
    headerName: "Photos 1",
    width: 150,
    renderCell: (params) => {
      return (
        <div>
          <img src={params.row.photos[0]} alt="photos" />
        </div>
      );
    },
  },
  {
    field: "photos2",
    headerName: "Photos 2",
    width: 150,
    renderCell: (params) => {
      return (
        <div>
          <img src={params.row.photos[1]} alt="photos" />
        </div>
      );
    },
  },
  {
    field: "photos3",
    headerName: "Photos 3",
    width: 150,
    renderCell: (params) => {
      return (
        <div>
          <img src={params.row.photos[2]} alt="photos" />
        </div>
      );
    },
  },
  {
    field: "photos4",
    headerName: "Photos 4",
    width: 150,
    renderCell: (params) => {
      return (
        <div>
          <img src={params.row.photos[3]} alt="" />
        </div>
      );
    },
  },
  {
    field: "photos5",
    headerName: "Photos 5",
    width: 150,
    renderCell: (params) => {
      return (
        <div>
          <img src={params.row.photos[4]} alt="" />
        </div>
      );
    },
  },
];
