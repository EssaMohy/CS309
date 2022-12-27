import { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar"
import { Link } from "react-router-dom";
import "./singlePro.css";
import Rev from "./review";
import { useState } from "react";
import { Container } from "@mui/material";


function SinglePro() {
    return (
        <Fragment> <header><Navbar></Navbar></header> <body>

            <div class="pro_detail">
                <div>
                    <img class="pro_detail_image" src={require("./1.jpg")} alt="" />
                </div>
                <div class="pro_dic">
                    <div class="pro_head">
                        <h3 class="pro_heading">Product Name</h3>
                        <p>Price is</p><p class="pro_price">$99999</p>

                    </div>
                    <div class="pro_size">
                    </div>
                    <p class="btn" style={{ width: "400px" }}>ADD TO CART</p>
                    <div class="description">
                        <h3 class="desc_head">Description</h3>
                        <p class="desc_data"> Experience a paradigm shift in athletic technology.
                            Our RS-2K Internet Exploring is delves into today's digital
                            narratives in physical form.
                            The RS-2K family of design represe...
                        </p>
                    </div>
                </div>
            </div>
            <Rev /> 
            <footer>
                   <div class="sosowow"><Container> <h2>feedback</h2></Container>
                </div>
</footer>
        </body>
        </Fragment>
    );
}
export default SinglePro;
