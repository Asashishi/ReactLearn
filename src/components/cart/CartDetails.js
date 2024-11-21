import React, {Fragment, useContext, useState} from 'react';
import BackDrop from "../backDrop/BackDrop";
import classes from './style/cartdetails.module.css';
import CartContext from "../../store/CartContext";
import Meal from "../meals/meal/Meal";
import CheckOut from "../checkOut/CheckOut";
import Confirm from "../confirm/Confirm";
const CartDetails = (props) => {

    // 取出购物车数据
    const context = useContext(CartContext);

    // 清空购物车
    const [showConfirm, setShowConfirm] = useState(false);

    const showConfirmHandler = () => {
        setShowConfirm(true);
    }
    const hideConfirmHandler = (event) => {
        setShowConfirm(false);
        event.stopPropagation();
    }
    const clearCartHandler = () => {
        setShowConfirm(false);
        props.onShow()
        context.clearCartCar();
    }

    return (
        <BackDrop onClick={props.onClick}>
            {showConfirm && <Confirm onOk={clearCartHandler} hiden={hideConfirmHandler} confirmText={'是否清空购物车'} />}
            <div className={classes.CartDetails} onClick={event => event.stopPropagation()}>
                <header className={classes.Header}>
                    <p className={classes.Title}>餐品详情</p>
                    <div onClick={showConfirmHandler} className={classes.ClearCart}>
                        清空购物车
                        <i className="bi bi-trash3"></i>
                    </div>
                </header>
                <div className={classes.CartData}>
                    {
                        context.items.map(item => item.amountInfo !== 0 ? <Meal isDetail={props.isDetail} unShow={props.unShow} noDesc={true} key={item.id} meal={item} amountInfo={item.amountInfo} /> : null)
                    }
                </div>
            </div>
        </BackDrop>
    );
};

export default CartDetails;