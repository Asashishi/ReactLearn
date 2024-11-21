import React, {Fragment, useState} from 'react';
import Meals from "./components/meals/Meals";
import { v4 as uuid } from 'uuid';
import CartContext from "./store/CartContext";
import MealsFilter from "./components/mealsFilter/MealsFilter";
import Cart from "./components/cart/Cart";

// 模拟数据
const MEALS_DATA = [
    {
        id: uuid(),
        title: '麦香鸡腿堡',
        desc: "黄金酥脆的外皮,鲜嫩爽滑的鸡腿肉,满口爆汁,挑战您的味蕾!",
        price: 12,
        img: "/img/meals/6.jpg"
    },
    {
        id: uuid(),
        title: '麦辣鸡腿堡',
        desc: "黄金酥脆的外皮,鲜嫩爽滑的鸡腿肉,满口爆汁,加上川香辣酱,挑战您的味蕾!",
        price: 12,
        img: "/img/meals/4.jpg"
    },
    {
        id: uuid(),
        title: '板烧鸡腿堡',
        desc: "大块去骨鸡排,搭配新鲜蔬菜与香浓的烧鸡酱,美味无懈可击!",
        price: 15,
        img: "/img/meals/5.jpg"
    },
    {
        id: uuid(),
        title: '牛肉汉堡',
        desc: "百分百纯牛肉配搭爽脆酸瓜,经典滋味让你无法抵挡!",
        price: 15,
        img: "/img/meals/1.jpg"
    },
    {
        id: uuid(),
        title: '芝士牛肉汉堡',
        desc: "百分百纯牛肉搭配软芝士,加上秘制酱料,美味无人能挡!",
        price: 18,
        img: "/img/meals/7.jpg"
    },
    {
        id: uuid(),
        title: '双层芝士牛肉汉堡',
        desc: "百分百纯牛肉搭配双层软芝士,加上秘制酱料,美味无人能挡!",
        price: 21,
        img: "/img/meals/2.jpg"
    },
    {
        id: uuid(),
        title: '巨无霸汉堡',
        desc: "两块百分百纯牛肉,搭配生菜洋葱等新鲜蔬菜与芝士,口感丰富,极致美味!",
        price: 25,
        img: "/img/meals/3.jpg"
    },
]

const App = () => {

    // state 存储商品数据
    // const [mealsData, setMealsData] = useState(MEALS_DATA);


    const [mealsData,setMealsData] = useState(MEALS_DATA)

    // state 存储购物车 1: 商品 2: 商品总数 3: 总价
    const [cartData, setCartData] = useState(
        {
            items: [],
            totalAmount: 0,
            totalPrice: 0,
        }
    );

    const mealsFilterHandler = (keyword) => {
        if (keyword) {
            const dataFilter = MEALS_DATA.filter(item => item.title.indexOf(keyword) !== -1)
            if (dataFilter.length > 0) {
                setMealsData(dataFilter)
            }
        }
        else {
            setMealsData(MEALS_DATA)
        }
    }

    // 添加商品
    const addMealHandler = (meal) => {
        // 对购物车进行浅复制
        const newCart = {...cartData};
        if (newCart.items.indexOf(meal) === -1) {
            newCart.items.push(meal);
            meal.amountInfo = 1
        }else{
            meal.amountInfo += 1;
        }
        newCart.totalAmount += 1;
        newCart.totalPrice += meal.price;
        setCartData(newCart);
    }

    // 减少商品
    const subMealHandler = (meal) => {
        const newCart = {...cartData};
        if (meal.amountInfo === 0){
            // newCart.items.splice(newCart.items.indexOf(meal), 1);
        }
        else{
            meal.amountInfo -= 1;
        }
        newCart.totalAmount -= 1;
        newCart.totalPrice -= meal.price;
        setCartData(newCart);
    }

    const clearCart = () => {
        const newCart = {...cartData};
        newCart.items.forEach((item => delete item.amountInfo));
        newCart.items = [];
        newCart.totalAmount = 0;
        newCart.totalPrice = 0;
        setCartData(newCart);
    }

    return (
        <CartContext.Provider value={
            {
                // 不能直接将对象赋值给对象
                items: cartData.items,
                totalAmount: cartData.totalAmount,
                totalPrice: cartData.totalPrice,
                addMealHandler: addMealHandler,
                subMealHandler: subMealHandler,
                clearCartCar: clearCart,
            }
        }>
            <Fragment>
                {
                    /*
                    使用Context.Provider向Context组件传递数据 通过value传递 使用后该组件的子组件都能通过Context访问数据
                    适合需要隔代传递的参数
                    使用Context访问数据时会读取离其最近的Provider 如无Provider 则访问默认数据
                     */
                }
                <MealsFilter onSerch={mealsFilterHandler} />
                <Meals mealsData={mealsData} />
                <Cart />
            </Fragment>
        </CartContext.Provider>

    );
};

export default App;
