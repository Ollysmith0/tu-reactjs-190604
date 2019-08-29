import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const danhsachsp=[
    {
        imgURL:"https://cdn.tgdd.vn/Products/Images/42/192003/samsung-galaxy-a9-2018-blue-600x600.jpg",
        title: "Samsung",
        description: "Great",
        price: "1 USD"
    },
    {
        imgURL:"https://cdn.tgdd.vn/Products/Images/42/198986/samsung-galaxy-s10-plus-512gb-ceramic-black-600x600.jpg",
        title: "Samsung1",
        description: "Great",
        price: "2 USD"
    },
    {
        imgURL:"https://cdn.fptshop.com.vn/Uploads/Originals/2019/4/13/636907475981220637_samsung-galaxy-a70-den-1.png",
        title: "Samsung2",
        description: "Great",
        price: "3 USD"
    }
]
ReactDOM.render(<App dssp={danhsachsp}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
