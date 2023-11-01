import React from "react";
import '../../styles/button-slope-filter.css'

const Button = (props) => {
    return (
        <div className="container-button">
            <button type="button" className="button">{props.title}</button>
        </div>
    );
}

export default Button;