import React from "react";
import "../../styles/index.css";

function Jumbotrom () {
    return (
        <div className="d-flex justify-content-center">
        <div className="jumbotron p-4 pb-5" id="jumbotrom">
            <h1>A Warm Welcome!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sint maxime nemo facere tenetur quas quae delectus nihil itaque, sit quaerat. Unde molestiae, illo a consequatur deleniti voluptatem ducimus eaque!</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
        </div>
        </div>
    )
}

export default Jumbotrom;