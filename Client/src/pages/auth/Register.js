import React from 'react';
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Banner from '../../components/cards/Banner';
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import TopSlideShow from "../../components/cards/TopSlideShow";
import Footer from "../../components/Footer";

const RegisterPage = () => {
    // state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //hooks
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                `/register`,
                {
                    name,
                    email,
                    password,
                }
            );
            console.log(data);
            if (data?.error) {
                toast.error(data.error);
            } else {
                // localStorage.setItem("auth", JSON.stringify(data));
                // setAuth({ ...auth, token: data.token, user: data.user });
                toast.success("Registration successful");
                navigate("/login");
            }
        } catch (err) {
            console.log(err);
            toast.error("Registration failed. Try again.");
        }
    };
    return (
        <div>
            <TopSlideShow />
            <Banner title="" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className='card w-100  p-2 mb-5'>
                            <div className="card-body">
                                <h4>SIGN UP</h4>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        className="form-control mb-4 p-2 animated fadeInUp"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        autoFocus
                                    />

                                    <input
                                        type="email"
                                        className="form-control mb-4 p-2 animated fadeInUp"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <input
                                        type="password"
                                        className="form-control mb-4 p-2 animated fadeInUp"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                    <button className="btn w-100 animated fadeInUp float-end btn-primary animated fadeInUp " type="submit">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div> <Footer /></div>
        </div>
    );
};

export default RegisterPage;