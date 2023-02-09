import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx"
import AddProduct from "./components/AddProduct.jsx"
import UpdateProduct from "./components/UpdateProduct.jsx"
import AllProduct from "./components/AllProduct.jsx"
import Register from "./components/Register.jsx"
import AllUsers from "./components/AllUsers.jsx"
import UpdateUser from "./components/UpdateUser.jsx"

/* pour faire fonctionner fontawesome, rajouter:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"; => exemple pour ajouter le picto "trash"*/


function App() {
  
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>hello</h1>} />
        <Route path="/getAllProduct" element={<AllProduct />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/updateProduct/:id" element={<UpdateProduct />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/getAllUsers" element={<AllUsers />} />
        <Route path="/updateUser/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

