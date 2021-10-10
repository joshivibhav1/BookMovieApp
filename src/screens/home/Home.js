import React from "react";
import Header from "../../common/header/Header";
import "./Home.css";

const Home = (props) => {
    return (
        <div>
            <Header baseUrl={props.baseUrl} />
        </div>
    );
};

export default Home;
