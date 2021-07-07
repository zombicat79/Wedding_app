import React from 'react';

const ProductOffer = (props) => {
    const { language } = props;
    
    return (
        <article>
        {props.products.map((oneProduct) => {
            return (
                <div key={oneProduct._id}>
                    <h2>{language === "catalan" ? oneProduct.name.cat : language === "spanish" ? oneProduct.name.esp : oneProduct.name.eng}</h2>
                    <img src={oneProduct.image} width="200" alt="A fantasy gift from a list" />
                    <p>{language === "catalan" ? oneProduct.description.cat : language === "spanish" ? oneProduct.description.esp : oneProduct.description.eng}</p>
                    <h3>{oneProduct.price}€</h3>
                    <button onClick={() => props.addItem(language === "catalan" ? oneProduct.name.cat : language === "spanish" ? oneProduct.name.esp : oneProduct.name.eng)}>Add to cart</button>
                </div>
                )
            })
        }
        </article>
    )        
}

export default ProductOffer;