// import { useState } from "react";
// import './App.css'
// export const LoginForm = () => {
//   const [data, setData] = useState({ email: "Initial", password: "Initial" });

//   return (
//     <><form>

//       <label htmlFor="mail" className="mail"><b>Email: </b></label>
//       <input className="mail" type="email" id="mail" name="mail" placeholder="Enter your mail" required onChange={(event) => setData({ ...data, email: event.target.value })} />
//       <br />
//       <br />
//       <label htmlFor="password"><b>Password: </b></label>
//       <input type="password" id="password" name="password" required placeholder="Enter password" onChange={(event) => setData({ ...data, password: event.target.value })} />
//       <br />
//       <br />
      
//       <button className="button" type="submit"><b>Submit</b></button>.;
//     </form>
//       <h2 ><b>The entered email is {data.email} </b></h2>
//       <h2><b>and the password is {data.password}</b></h2>
//     </>
//   )
// };
// export default LoginForm;


import { useState } from "react";
import './App.css'
import './axios'
import api from "./axios";

// import { json } from "../node_modules/react-router-dom/dist/index";

const Login = (props) => {
  const [message, setMessage] = useState(false);
  const [data, setData] = useState({ email: "Intial", password: "initial" });
  const [error, setError] = useState(null);

  const updateData = (type, event) => {
    setData({ ...data, [type]: event });
  };

  const handlesSubmit = async (e) => {
    e.preventDefault();

    // const response = await fetch("http://127.0.0.1:5000/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    const response = await api.post("/login",data )
    console.log(data);

    const result = await response.data;
    setMessage("result"?.msg);
    console.log(result);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Login Form</h1>

      <div>
        <label>
          Username:
          <input
            type="text"
            onChange={(e) => updateData("text", e.target.value)}
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          email:
          <input
            type="email"
            onChange={(e) => updateData("email", e.target.value)}
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Number:
          <input
            type="number"
            onChange={(e) => updateData("number", e.target.value)}
          />
        </label>
      </div>
      <br />
      <div>
        <label>
          Password:
          <input
            type="password"
            onChange={(e) => updateData("password", e.target.value)}
          />
        </label>
      </div>
      <br />

      <button onClick={handlesSubmit}>Submit</button>
    </div>
  );
};

export default Login;