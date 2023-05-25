import React from 'react'
import './Error.scss'
import { Link } from "react-router-dom";
import error_gif from './../../../assets/Error/error.jpg'
const Error = () => {
    return (
        <section id='error'>
            {/* <img src={error_gif} alt="" /> */}
            <div>
                <p>Go to
                    {/* <a id="style-2" data-replace="Home page">
                        <Link to={'/'} className="link">
                            <span>Home Page</span>
                        </Link>
                    </a> */}
                    <Link to={'/'} className="link">
                        <span>Home Page</span>
                    </Link>
                </p>
            </div>
        </section >
    )
}

export default Error