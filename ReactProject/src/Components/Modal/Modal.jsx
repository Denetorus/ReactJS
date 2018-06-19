import React, { Component } from "react";
import "./Modal.css";

export default class Modal extends Component{

    modalClose(){
        let item = document.getElementById("modal");
        item.classList.remove("modal__show");
    }

    render(){
        return (
            <div className="modal" id="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">SIGN IN</h4>
                            <button type="button" className="close" onClick={ this.modalClose }><span
                                aria-hidden="true">&times;</span></button>
                        </div>
                        <div className="modal-body">
                            <div className="container-">
                                <div className="row">
                                    <label htmlFor="Login" className="col-3">Login</label>
                                    <input type="text" id="Login" className="col-8"></input>
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="Password" className="col-3">Password</label>
                                <input type="password" id="Password" className="col-8"></input>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" onClick={ this.modalClose }>Close</button>
                            <button type="button" className="btn btn-primary" onClick={ this.modalClose }>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )


    }
}

