import React, {useState} from 'react';
import {signup} from "../../services/LoginService.js";
import {useNavigate} from "react-router-dom";

const SignupComponent = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {
    const userData = {
      username,
      password,
      nickname,
    }
    if(password == confirmPassword) {
      console.log(userData.username);
      signup(userData);
      alert("회원가입이 완료되었습니다.");
      navigate("/login")
    } else {
      alert("Passwords don't match")
      return false;
    };
  }

  return (
      <div>
        <div className="container">
          <div className="signup-container">
            <form action={handleSignup} className="form form-control">
              <h1 style={{textAlign:"center", marginBottom:"30px"}}>회원가입</h1>
              <label>Email</label>
              <input type="text" name="username"
                     className="form-control" placeholder="Email"
                     onChange={(e) => setUsername(e.target.value)} />
              <label>닉네임</label>
              <input type="text" name="nickname"
                     className="form-control" placeholder="nickname"
                     onChange={(e) => setNickname(e.target.value)} />
              <label>비밀번호</label>
              <input type="password" name="password"
                     className="form-control" placeholder="Password"
                     onChange={(e) => setPassword(e.target.value)} />
              <input type="password" name="password"
                     className="form-control" placeholder="Password 재입력"
                     onChange={(e) => setConfirmPassword(e.target.value)} />
              <button className="btn btn-primary">회원가입</button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default SignupComponent;