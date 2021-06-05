import React from 'react';

import fakeProducts from './../../../FakeProducts';

const PurchaseSummary = (props) => {
    console.log(props.cartItems)
    let prepurchaseItems = [];
    for (const item in props.cartItems) {
        for (const element of fakeProducts) {
            if (item === element.title) {
                prepurchaseItems.push({item: item, num: props.cartItems[item], price: element.price})
            }
        }
    }
    console.log(prepurchaseItems)
    
    return (
        <article>
            <h2>You are acquiring...</h2>
            <ul>
                {prepurchaseItems.map((el) => {
                    return (
                        <li>{el.num} {el.item}<p>{el.num * el.price}€</p></li>
                    )
                })}
            </ul>
        </article>
    )
}

export default PurchaseSummary;