import React from "react";
import '../../styles/button-slope-filter.css'

const Button = (props) => {
    return (
        <div className="container-button">
            <div className="button">{props.title}</div>
        </div>
    );
}

export default Button;