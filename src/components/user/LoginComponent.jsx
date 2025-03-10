import React, {useState} from 'react';
import "./user.css"
import {login} from "../../services/LoginService.js";
import {useNavigate} from "react-router-dom";

const LoginComponent = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const userData = {
      username,
      password,
    }
    login(userData);
    navigate("/");
  }

  return (
      <div className="container">
        <div className="login-container">
          <form action={handleLogin} className="form form-control">
            <h1 style={{textAlign:"center", marginBottom:"30px"}}>Login</h1>
            <label>Email</label>
            <input type="text" name="username"
                   className="form-control" placeholder="Email"
                   onChange={(e) => setUsername(e.target.value)} />
            <label>비밀번호</label>
            <input type="password" name="password"
                   className="form-control" placeholder="Password"
                   onChange={(e) => setPassword(e.target.value)} />
            <button className="btn btn-primary login-button">로그인</button>
            <div className="signup-link">
              <a href="/signup">회원가입</a>
            </div>
          </form>
        </div>
      </div>
  );
};

export default LoginComponent;