import React from 'react';

/* 通过Context共享数据
* Context为一个公共空间, 可将多个组件都需要访问的数据统一存储到一个Context中
*  */

const CartContext = React.createContext(
    {
        items: [],
        totalAmount: 0,
        totalPrice: 0,
        addMealHandler: () => {},
        subMealHandler: () => {},
        clearCartCar: () => {},
    }
);

export default CartContext;