import React, { useEffect, useState } from "react";
import firebaseApp from "../../firebase";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  console.log(props, "login");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errMsg, setErrMsg] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await props.getLogin(formData.email, formData.password);
      console.log(formData);
    } catch (err) {
      setErrMsg(err.message);
    }
  };

  const onChange = (e) => {
    const id = e.target.id;
    setFormData({ ...formData, [id]: e.target.value });
  };

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((result) => {
      if (result) {
        //Nếu đã đăng ký thì chuyển thành trang home
        if (
          props.location.pathname === "/login" ||
          props.location.pathname === "/dangnhap"
        ) {
          props.history.push("/");
        }
        //Nếu đã đăng nhập thì chuyển thành trang home
        if (
          props.location.pathname === "/register" ||
          props.location.pathname === "/dangky"
        ) {
          props.history.push("/");
        }
      }
    });
  }, []);

  console.log(props.location);

  return (
    <main>
      {/* breadcrumb-area-start */}
      <section
        className="breadcrumb-area"
        style={{ backgroundImage: 'url("./assets/page-title.png")' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb-text text-center">
                <h1>Login</h1>
                <ul className="breadcrumb-menu">
                  <li>
                    <a href="index.html">home</a>
                  </li>
                  <li>
                    <span>Login</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* breadcrumb-area-end */}
      {/* login Area Strat*/}
      <section className="login-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 className="text-center mb-60">Login From Here</h3>
                <p>{errMsg}</p>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name">
                    Email Address <span>**</span>
                  </label>
                  <input
                    id="email"
                    onChange={onChange}
                    type="text"
                    placeholder="Enter Username or Email address..."
                  />
                  <label htmlFor="pass">
                    Password <span>**</span>
                  </label>
                  <input
                    id="password"
                    onChange={onChange}
                    type="password"
                    placeholder="Enter password..."
                  />
                  <div className="login-action mb-20 fix">
                    <span className="log-rem f-left">
                      <input id="remember" type="checkbox" />
                      <label htmlFor="remember">Remember me!</label>
                    </span>
                    <span className="forgot-login f-right">
                      <a href="#">Lost your password?</a>
                    </span>
                  </div>
                  <button type="submit" className="btn theme-btn-2 w-100">
                    Login Now
                  </button>
                  <div className="or-divide">
                    <span>or</span>
                  </div>

                  <a href="/register">
                    <button className="btn theme-btn w-100">
                      Register Now
                    </button>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* login Area End*/}
    </main>
  );
};
export default withRouter(Login);
