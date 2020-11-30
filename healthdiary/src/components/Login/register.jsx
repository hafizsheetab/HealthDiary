import React from "react";
import loginImg from "../../resources/imgaes/login.svg";

export class Register extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username
                        <input type="text" name="username" placeholder="username"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email
                        <input type="email" name="email" placeholder="email"/>
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password
                        <input type="password" name="password" placeholder="password"/>
                        </label>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Register
                </button>
            </div>
        </div>
    }

}