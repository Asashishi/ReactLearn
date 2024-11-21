import React, {Fragment, useContext} from 'react';
import classes from './style/meal.module.css';
import Counter from "./UI/counter/Counter";
import CarContext from "../../../store/CartContext";

/* 食物组件
* */

const Meal = (props) => {

    const context = useContext(CarContext);

    return (

        <Fragment>
            <div className={ props.checkOut ? classes.MealCheck : classes.Meal}>
                <div className={props.noDesc ? classes.ImageBoxNoDesc : classes.ImageBox}>
                    <img src={props.meal.img} alt={`meal-${props.meal.id}`}></img>
                </div>
                <div className={classes.DescWrapper}>
                    <p className={classes.Tittle}>
                        {props.meal.title}
                    </p>
                    {props.noDesc ? null : <p className={classes.Desc}>{props.meal.desc}</p>}
                    <div className={classes.PriceWrapper}>
                        <span className={classes.Price}>{props.meal.price}</span>
                        {<Counter checkOut={props.checkOut} isDetail={props.isDetail} unShow={props.unShow} noBtn={props.noBtn} meal={props.meal} onAdd={context.addMealHandler} onSub={context.subMealHandler}/>}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Meal;