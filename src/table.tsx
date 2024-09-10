import { useState } from "react";
import "./App.css"
import api from "./axios";
import Register from "./register";
export const Table = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const [selectedRow, setSelectedRow] = useState(null); 
  console.log(selectedRow);
  


  const getData = async () => {
    setLoading(true);
    const response = await api("/getdata");
    const responseValue = await response.data;
    setLoading(false);
    setData(responseValue);
  };

  const handleRemove = (row) => {
    setData(data.filter((r) => r.id !== row.id));
  };

  const handleEdit = (row) => {
    setSelectedRow(row);
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  const handleUpdateRow = (updatedRow) => {
    const updatedData = data.map((row) => {
      if (row.id === updatedRow.id) {
        return updatedRow;
      }
      return row;
    });
    setData(updatedData);
    // setSidebarOpen(false);
  };

  return (
    <>
      <button onClick={() => getData()}>Get Data</button>
      <button onClick={() => setData([])}>Reset</button>

      <table>
        <tr>
          <th>S.No</th>
          <th>User Name</th>
          <th>E-mail</th>
          <th>Phone</th>
          <th>password</th>
          <th>Action</th>
        </tr>
        {data.map((user, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phonenumber}</td>
            <td>{user.password}</td>
            <td>
            <button onClick={() => handleEdit(user)}>Edit</button>
            {/* <button onClick={() => handleRemove(user)}>Remove</button> */}
            </td>
          </tr>
        ))}
      </table>
      {sidebarOpen && (
        <div style={{ position: "fixed", top: 0, right: 0, width: "300px", height: "100vh", backgroundColor: "#f0f0f0", padding: "20px", zIndex: 1000, color: "#000"}}>
          <h2>Row Details</h2>
          <p>Username: {selectedRow.name}</p>
          <p>Email: {selectedRow.email}</p>
          <p>Phonenumber: {selectedRow.phonenumber}</p>
          <button onClick={handleCloseSidebar}>Close</button>
          <Register editMeta={selectedRow} onUpdateRow={handleUpdateRow} />
        </div>
      )}
    </>
  );
};

export default Table;