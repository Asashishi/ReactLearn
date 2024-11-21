import React from 'react';
import Meal from "./meal/Meal";
import classes from "./style/meals.module.css"
/* 食物列表组件
* */

const Meals = (props) => {

    return (
        <div className={classes.Meals}>
            {props.mealsData.map(item => <Meal key={item.id} meal={item} />)}
        </div>
    );
};

export default Meals;