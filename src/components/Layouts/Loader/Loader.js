import React from "react";
import "./style.css";
const loader = () =>
{
    return (
        <div className="progress-bar">
            <span className="bar">
                <span className="progress"></span>
            </span>
        </div>
    );
};

export default loader;