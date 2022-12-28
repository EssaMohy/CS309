import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./proList.css";
import Topbar from "../componants/topbar/topbar";
function Hhome() {
    return (
        <Fragment>
            <header>
                <Topbar></Topbar>
            </header>

            <section class="products" id="products">

                <h1 class="heading"> Hello Mr Admin <span>This is your Dashboard</span> </h1>

            </section>
        </Fragment>
    );
}
export default Hhome;
