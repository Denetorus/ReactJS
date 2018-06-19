
import React, { Component } from "react";
import Modal from "components/Modal/index";

export default class Login extends Component{

    modalShow(){
        let item = document.getElementById("modal");
        item.classList.add("modal__show");
    }

    render(){
        return (
            <div>
                <Modal/>
                <div className="btn btn-success" onClick={this.modalShow} >Sign in</div>

            </div>
        )
    }

}