import React from "react";

function Alert(props) {
    return (
        <div style={{height: '50px'}}>
        {props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Sucess</strong> {props.alert}
        </div>}
        </div>
    );
}

export default Alert;