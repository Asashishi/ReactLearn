import React, {useContext, useState} from 'react';
import classes from './style/counter.module.css';
import Confirm from "../../../../confirm/Confirm";
import CartContext from "../../../../../store/CartContext";

/* 引入 BootStrap解决图标不对齐问题
* npm install react-bootstrap bootstrap bootstrap-icons
* 在index中
* import 'bootstrap-icons/font/bootstrap-icons.css';
* */

const Counter = (props) => {

    const context = useContext(CartContext);

    const add = () => {
        if (props.meal.amountInfo === 999) {
            return;
        }
        props.onAdd(props.meal);
    }
    const sub = () => {
        if (props.isDetail && props.meal.amountInfo === 1 && context.totalAmount === 1) {
            props.unShow();
        }
        props.onSub(props.meal);
    }

    return (
        <div className={classes.Counter}>
            {
                // 三元运算规避 false 显示 0 的问题
                props.meal.amountInfo && props.meal.amountInfo !== 0 && props.noBtn !== true ? <button onClick={sub} className={classes.Sub}>
                    {/*可在父元素样式类中设置font属性来调整图标 也可设置 <i class="bi bi-plus fs-1 fw-bold"> 等改变图标大小*/}
                    <i className="bi bi-dash"></i>
                </button> : null
            }
            {props.meal.amountInfo && props.meal.amountInfo !== 0 ? <span className={props.noBtn ? classes.NumberNoBtn :classes.Number}> {props.meal.amountInfo}</span> : null}
            {props.checkOut ? <span className={classes.TotalPrice}>{props.meal.amountInfo * props.meal.price}</span> : null}
            {props.noBtn !== true ? <button onClick={add} className={classes.Add}>
                <i className="bi bi-plus"></i>
            </button> : null}
        </div>
    );
};

export default Counter;