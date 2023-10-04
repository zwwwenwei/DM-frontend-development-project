import React from 'react'
import './Footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer(props) {
    return <div className="bigfooter">
            <div className="footer">
            <div className="footer1">
                <h1>
                    <div>{props.head1}</div>
                </h1>
                <p1>
                    <div>{props.p1}</div>
                    <div>{props.p2}</div>
                    <div>{props.p3}</div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </p1>
            </div>
            <div className="footer2">
                <h2>
                    <div>{props.head2}</div>
                </h2>
                <p1>
                    <div>{props.p4}</div>
                    <div>{props.p5}</div>
                    <div>{props.p6}</div>
                </p1>
                    <br></br>
                    <br></br>
                    <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <div className="footer3">
                <h3>
                    <div>{props.head3}</div>
                </h3>
                <div className="icon"><FaFacebookSquare /><FaTwitterSquare /><FaInstagramSquare /></div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
            </div>
        </div>
        <div className="footer2-1">
            <h4>
                <div>{props.head4}</div>
            </h4>
            <p3>
                <div>{props.p7}</div>
                <div>{props.p8}</div>
                <div>{props.p9}</div>
            </p3>
            <br></br>
        </div>
    </div>
}
export default Footer