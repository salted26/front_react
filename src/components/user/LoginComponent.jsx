import React, {useState} from 'react';
import "./user.css"

const LoginComponent = () => {

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  }

  return (
      <div className="container">
        <div className="login-container">
          <form action={handleLogin} className="form form-control">
            <h1 style={{textAlign:"center", marginBottom:"30px"}}>Login</h1>
            <label>아이디</label>
            <input type="text" name="id"
                   className="form-control" placeholder="ID"
                   onChange={(e) => setId(e.target.value)} />
            <labe>비밀번호</labe>
            <input type="password" name="password"
                   className="form-control" pattern="password" placeholder="Password"
                   onChange={(e) => setPassword(e.target.value)} />
            <button className="btn btn-primary">로그인</button>
          </form>
        </div>
      </div>
  );
};

export default LoginComponent;