import React from "react";
import "./Admin.css";
import Topbar from "../../ADMIN/topbar/topbar";
import Newproduct from "../../ADMIN/newproduct/newproduct";
import Dproduct from "../../ADMIN/Dproduct/Dproduct";
import Uproduct from "../../ADMIN/Uproduct/Uproduct";
import { Fragment } from "react";
function Aadmin() {
    return (
        <Fragment>
            <div className="container">
                <div className='top'>
                    <Topbar />
                </div>
                <div className='cont2'>
                    <Newproduct /> <Uproduct /><Dproduct />
                </div>
            </div>
        </Fragment>
    );
}

export default Aadmin;
