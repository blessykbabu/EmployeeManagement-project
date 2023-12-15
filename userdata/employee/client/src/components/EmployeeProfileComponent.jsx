// import React ,{useEffect, useState}from "react";
// import axios from "axios"
// import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
// import { useParams } from "react-router-dom";


// // import EmployeeComponent from "./EmployeeComponent";
// export default function EmployeeProfileComponent(){
//   const {id}=useParams();
//   // const [serverMessage, setServerMessage] = useState('');
//     const [Lists,setLists]=useState([]);
//     // api fetch for employee list
  

//     useEffect(()=>{
//       axios.get(`http://localhost:3000/api/emp-list`)
//       .then((response)=>{
//           setLists(response.data.data);
//           console.log(response)
//         //  setServerMessage(response.data.message)
//         //  alert(response.data.message)
//       })
//       .catch((error)=>{
//          console.log("get eror:",error.message? error.message:error)
         
//        })
//     },[])
   
   

 

  

// //  UI
// return (
//     <>
//      {/* {serverMessage && <p>{serverMessage}</p>} */}
//     <div className="listTable">

//         <h2 style={{textAlign:"center",color:"white"}}>EMPLOYEE LIST</h2>

     
//      <div className="container">
//         <table className="table table-success table-striped  ">
//         <thead>
//           <tr>
//           <th scope="col">SL No</th>
//           <th scope="col">Emp_ID</th>
//           <th scope="col">Name</th>
//           <th scope="col">Email</th>
//           <th scope="col">Department</th>
//           <th scope="col">Phone</th>
//           <th scope="col"></th>
          
//           </tr>
//         </thead>
//         <tbody>
//         {Lists.map((list,index) => {
//        return (
//         <tr key={list._id}>
//           <td>{index+1}</td>
//           <td>{list._id}</td>
//          <td>{list.name}</td>
//          <td>{list.email}</td>
//          <td>{list.role}</td>
//          <td>{list.phone}</td>
//          <td><button className="btn btn-success"><Link to={`/profile/${list._id}`} style={{textDecoration:"none",color:"white"}}>view</Link></button></td>
//          </tr>
//          )
//         })}
      
//         </tbody>
//       </table>
     
 
//       </div>
//     </div>
    
//     </>
// );
// };
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function EmployeeProfileComponent() {
  const [lists, setLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); // Adjust based on your backend setup
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/emp-list?page=${currentPage}&pageSize=${pageSize}`)
      .then((response) => {
        setLists(response.data.data.datas);
        setTotalPages(response.data.data.total_pages);
      })
      .catch((error) => {
        console.log("get error:", error.message ? error.message : error);
      });
  }, [currentPage, pageSize]);

  return (
    <>
      <div className="listTable">
        <h2 style={{ textAlign: "center", color: "white" }}>EMPLOYEE LIST</h2>
        <div className="container">
          <table className="table table-success table-striped">
            {/* Your table header */}
            <thead>
              <tr>
                <th scope="col">SL No</th>
                <th scope="col">Emp_ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Department</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
              </tr>
            </thead>
            {/* Your table body */}
            <tbody>
              {lists.map((list, index) => {
                const serialNumber=(currentPage-1) * pageSize + index +1;
                return(
                <tr key={list._id}>
                  <td>{serialNumber}</td>
                  <td>{list._id}</td>
                  <td>{list.name}</td>
                  <td>{list.email}</td>
                  <td>{list.role}</td>
                  <td>{list.phone}</td>
                  <td>
                    <button className="btn btn-success">
                      <Link to={`/profile/${list._id}`} style={{ textDecoration: "none", color: "white" }}>view</Link>
                    </button>
                  </td>
                </tr>
                )
                })}
            </tbody>
          </table>
          {/* Pagination UI */}
          <nav className="d-flex justify-content-center" aria-label="Page navigation">
            <ul className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index + 1} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                  <Link
                    to={`?page=${index + 1}`}
                    className="page-link"
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
