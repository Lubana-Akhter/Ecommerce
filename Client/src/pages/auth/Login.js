import { useState } from "react";

import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import { useNavigate, useLocation } from "react-router-dom";
import Banner from "../../components/cards/Banner";
import TopSlideShow from "../../components/cards/TopSlideShow";
import Footer from "../../components/Footer";
const Login = () => {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // hook
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const location = useLocation();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("login", {
        email,
        password,
      });
      console.log(data);
      if (data?.error) {
        toast.error(data.error);
      } else {
        localStorage.setItem("auth", JSON.stringify(data));
        setAuth({ ...auth, token: data.token, user: data.user });
        toast.success("Login successful");

        navigate(
          location.state ||
          `/dashboard/${data?.user?.role === 1 ? "admin" : "user"}`
        );
      }
    } catch (err) {
      console.log(err);
      toast.error("Login failed. Try again.");
    }
  };

  return (

    <>
      <TopSlideShow />
      <div className="section-between"></div>
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6 center-screen">
            <div className="card w-100  p-2">
              <div className="card-body">
                <h4>SIGN IN</h4>
                <br />
                <form onSubmit={handleSubmit}>
                  <input value={email}
                    onChange={(e) => setEmail(e.target.value)} placeholder="User Email" className="form-control animated fadeInUp" type="email" />
                  <br />
                  <input placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} className="form-control animated fadeInUp" type="password" />
                  <br />
                  <button className="btn w-100 animated fadeInUp float-end btn-primary" type="submit">Submit</button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div> <Footer /></div>
    </>


  );
}

export default Login;