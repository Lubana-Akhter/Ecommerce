import React from 'react';

const Banner = ({
    title,
    subTitle = "Welcome to ShopSmart",
}) => {


    return (
        <div
            className="container-fluid banner"
            style={{ marginTop: "-8px", height: "200px" }}>
            <div className="row">
                <div className="col text-center p-5">
                    <h1 className="fw-bold">{title}</h1>
                    <p className="fs-2 text-info fw-bold">{subTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;