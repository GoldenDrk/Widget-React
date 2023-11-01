import React from "react";
import RadioPass from "./buttons/radio-pass";
import '../styles/passStyle.css'

const Pass = () => {

    return (
        <div>
            <div className="container-pass">
                <h2>Lowpass</h2>
            </div>
            <div className="container-radio-pass">
                <RadioPass title="6" />
                <RadioPass title="12" />
                <RadioPass title="18" />
                <RadioPass title="24" />
                <RadioPass title="36" />
            </div>

        </div>
    );
}

export default Pass;