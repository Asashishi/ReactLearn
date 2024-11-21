import React from 'react';
import classes from './style/backdrop.module.css';
import ReactDOM from "react-dom";
const backDropRoot = document.getElementById('backdrop')
function BackDrop(props) {

    /*React portal 将组件渲染到网页的指定位置,而非使用父子关系 避免定位层级的渲染问题 要在index.html中新建一个层级
    * return ReactDOM.createPortal([JSX],DOM元素) 创建传送门
    * */
    return ReactDOM.createPortal(
        (
            <div onClick={props.onClick} className={classes.Backdrop}>
                {/*展开props将应用所有被设置的属性*/}
                {props.children}
            </div>
        ),backDropRoot);
}

export default BackDrop;