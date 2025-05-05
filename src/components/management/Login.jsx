import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const [userLogInfo, setUserLogInfo] = useState({
    userName: "",
    passWord: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserLogInfo((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { user, isAuthenticated } = useAuth(userLogInfo);
    if (isAuthenticated) {
      console.log("login success!", user);
      navigate("/dashboard", { state: { user: userLogInfo } });
    } else {
      alert("User Not Match");
    }
  };
  return (
    <div>
      <h4>Login</h4>
      <form onSubmit={handleSubmit}>
        <div>
          UserName:{" "}
          <input
            type="text"
            name="userName"
            placeholder="type user name"
            value={userLogInfo.userName}
            onChange={handleInput}
          />
        </div>
        <div style={{ margin: 5 }}>
          PassWord:{" "}
          <input
            type="password"
            name="passWord"
            placeholder="enter password"
            value={userLogInfo.passWord}
            onChange={handleInput}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
