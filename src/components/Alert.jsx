import React from "react";

function Alert(props) {
    return (
        props.alert && <div className="alert alert-warning alert-dismissible fade show mt-3" role="alert">
            <strong>Sucess</strong> {props.alert}
        </div>
    );
}

export default Alert;