import React from 'react';

import fakeProducts from './../../../FakeProducts';

const ProductOffer = (props) => {
    return (
        <article>
        {fakeProducts.map((oneProduct) => {
            return (
                <div key={oneProduct._id}>
                    <h2>{oneProduct.title}</h2>
                    <img src={oneProduct.image} width="200" />
                    <p>{oneProduct.description}</p>
                    <h3>{oneProduct.price}€</h3>
                    <button onClick={() => props.addItem(oneProduct.title)}>Add to cart</button>
                </div>
                )
            })
        }
        </article>
    )
}

export default ProductOffer;