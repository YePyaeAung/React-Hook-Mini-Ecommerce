import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Master(props) {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">React Ecommerce</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" to="/cart">Cart
                                        <span className="badge badge-danger ml-1">{
                                        10
                                        }</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                </nav>
                <div className="container p-5">
                    {props.children}
                </div>
        </Fragment>
    )
}
