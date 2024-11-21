import React, {useContext, useState} from 'react';
import classes from './style/cart.module.css';
import CartContext from "../../store/CartContext";
import CartDetails from "./CartDetails";
import CheckOut from "../checkOut/CheckOut";

const Cart = (props) => {

    const context = useContext(CartContext);

    // 购物车详情的显示和隐藏
    const [showCart, setShowCart] = useState(false);

    // 结账页面的显示与隐藏
    const [checkout, setCheckout] = useState(false);

    const cartClickHandler = () =>{
        if (context.totalAmount === 0){
            return;
        }
        setShowCart(!showCart);
    }
    const cartUnShow = () => {
        setShowCart(!showCart);
    }

    const showCheckoutHandler = () =>{
        setCheckout(!checkout);
    }

    const toAsashishi = () => {
        window.location.href = "http://publicserver.dhauser.cn/about";
    }

    return (
        <div className={classes.Cart} onClick={cartClickHandler}>
            {checkout ? <CheckOut hiden={showCheckoutHandler}/> : null}
            {showCart && context.totalAmount !== 0 && !props.checkOut ? <CartDetails isDetail={true} unShow={cartUnShow} onShow={cartClickHandler} onClick={cartClickHandler} /> : null}
            <div className={classes.IconBar}>
                {context.totalAmount > 0 ? <i className="bi bi-cart-fill"></i> : <i className="bi bi-cart"></i>}
                {context.totalAmount > 0 ? <span className={classes.TotalAmount}>{context.totalAmount}</span> : null}
            </div>
            {context.totalPrice > 0 ? <p className={classes.Price}>￥{context.totalPrice}</p> : null}
            {context.totalPrice === 0 ? <button className={classes.BtnRe}>请选购</button> : props.checkOut ? <button onClick={toAsashishi} className={classes.Btn}>去支付</button> : <button onClick={showCheckoutHandler} className={classes.Btn}>去结算</button>}
        </div>
    );
};

export default Cart;