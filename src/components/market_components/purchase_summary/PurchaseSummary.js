import React from 'react';
import { Link } from 'react-router-dom';

const PurchaseSummary = (props) => {
    
    let prepurchaseItems = [];
    for (const item in props.cartItems) {
        for (const element of props.products) {
            if (item === element.name.eng) {
                const translatedItem = props.language === "catalan" ? element.name.cat : props.language === "spanish" ? element.name.esp : element.name.eng;
                prepurchaseItems.push({
                    item: translatedItem, 
                    num: props.cartItems[item], 
                    price: element.price
                });
            }
        }
    }
    
    const cost = prepurchaseItems.reduce((acc, current) => {
        return acc + current.num * current.price;
    }, 0)
    
    return (
        <article>
            {(props.match.path === "/checkout" || cost > 0) && <div>
                <h2>You are acquiring...</h2>
                <ul>
                    {prepurchaseItems.map((el) => {
                        return (
                            el.num > 0 &&
                            <li key={el.item}>      
                                {el.num} {el.item}
                                <p>{el.num * el.price}€</p>
                                {props.match.path === "/checkout" && 
                                <>    
                                    <button onClick={() => props.addToCart(el.item)}>+</button>
                                    <button onClick={() => props.removeFromCart(el.item)}>-</button>
                                    <button onClick={() => props.removeFromCart(el.item, 1)}>Remove all</button>
                                </>
                                }
                            </li>
                        )
                    })}
                </ul>
                <h3>Total cost: {cost}€</h3>                
            </div>}
            {(props.match.path === "/market" && cost !== 0) &&
            <div>
                <Link to="/checkout"><button>Proceed to checkout</button></Link>
            </div>
            }
            {props.match.path === "/checkout" &&
            <div>
                <Link to="/market"><button>Browse for different products</button></Link>
                <button>Confirm and pay</button>
            </div>
            }
        </article>
    )
}

export default PurchaseSummary;