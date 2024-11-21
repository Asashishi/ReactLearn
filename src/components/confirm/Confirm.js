import React from 'react';
import BackDrop from "../backDrop/BackDrop";
import classes from "./style/confirm.module.css";

const Confirm = (props) => {

    const hideHandler = (event) =>{
        props.hiden(event);
    }

    return (
        <BackDrop onClick={event => event.stopPropagation()} className={classes.ConfirmOuter}>
            <div className={classes.Confirm}>
                <p>{props.confirmText}</p>
                <div className={classes.ButtonWrapper}>
                    <button onClick={props.onOk}>确认</button>
                    <button onClick={hideHandler} className={classes.BtnNo}>取消</button>
                </div>
            </div>
        </BackDrop>
    );
};

export default Confirm;