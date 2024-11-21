import React, {useState} from 'react';
import classes from './style/mealsFilter.module.css'

const MealsFilter = (props) => {

    const inputChangeHandler = (event) => {
        props.onSerch(event.target.value)
    }

    return (
        <div className={classes.MealsFilter}>
            <div className={classes.InputWrapper}>
                <i className="bi bi-search"></i>
                <input onChange={inputChangeHandler} className={classes.SearchInput} type={"text"} placeholder={"请输入餐名"} ></input>
            </div>
        </div>
    );
};

export default MealsFilter;