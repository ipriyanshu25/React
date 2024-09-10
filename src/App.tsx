import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./login";
import Table from "./table";
import HomePage  from "./home";
import Counter from "./counter";
import Register from "./register";
import Exam from "./exam";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage test ="This is a sample home page."/>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/table" element={<Table />} />
        <Route path="/register" element={<Register />} />
        <Route path="/exam" element={<Exam />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;































// test = "Welcome to My Home Page"