// import React, {useContext} from 'react';
// import Context from "./CarContext";
// import Context from "./Context";

// const ContextTest = () => {
//     return (
//         // 使用Context.Consumer调用context中的内容
//         <Context.Consumer>
//             {/*需传入一个回调函数 使用回调函数参数读取Context信息 在其返回值中定义JSX*/}
//             {(context) => {
//                 return (
//                     <div>
//                         {Context.name}
//                     </div>
//                 )
//             }}
//             )
//         </Context.Consumer>
//     );
// };

// 使用钩子函数访问 useContext() 获取context
//
// const ContextTest = () => {
//
//     // 使用钩子函数访问Context 仅适用于函数组件
//     const context = useContext(Context);
//
//     return (
//         <div>
//
//         </div>
//     );
// };