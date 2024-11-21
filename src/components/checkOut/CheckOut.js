import React, {useContext} from 'react';
import ReactDOM from "react-dom";
import classes from "./style/checkOut.module.css"
import CartContext from "../../store/CartContext";
import Meal from "../meals/meal/Meal";
import Cart from "../cart/Cart";

const checkOutRoot = document.getElementById('checkout');
const CheckOut = (props) => {

    const context = useContext(CartContext);

    return ReactDOM.createPortal(
        (
            <div className={classes.CheckOut}>
                <div onClick={props.hiden} className={classes.Close}>
                    <i  className="bi bi-x-circle"></i>
                </div>
                <div className={classes.MealsDesc}>
                    <header className={classes.Header}>
                        <p className={classes.Tittle}>订单详情</p>
                    </header>
                    <div className={classes.MealList}>
                        {context.items.map(item => item.amountInfo !==0 ? <Meal checkOut={true} noBtn={true} noDesc={true} key={item.id} meal={item} amountInfo={item.amountInfo} /> : null)}
                    </div>
                    <footer className={classes.Footer}>
                        <div className={classes.Price}>
                            {context.totalPrice}
                        </div>
                    </footer>
                </div>
                <Cart checkOut={true}/>
            </div>

        ), checkOutRoot);
};

export default CheckOut;