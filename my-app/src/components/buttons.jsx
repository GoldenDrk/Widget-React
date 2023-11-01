import React from "react";
import Button from "./buttons/button-slope-filter";
import '../styles/button-container.css'

const Buttons = () => {

    return (
        <div className="buttons-container">
            <Button title="Slope" />
            <Button title="Filter On" />

        </div>
    );
}

export default Buttons;