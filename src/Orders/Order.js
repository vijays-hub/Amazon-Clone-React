import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProduct from '../Check-out/CheckoutProduct'
import CurrencyFormat from 'react-currency-format'

function Order({ order }) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('LLLL')}</p>
            <p className="order__id">
                {order.id}
            </p>
            {order.data.basket?.map(item => {
                return (<CheckoutProduct
                    id={item.id}
                    title={item.title}
                    rating={item.rating}
                    price={item.price}
                    image={item.image}
                    hideButton={true}
                >
                </CheckoutProduct>)
            })}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <h3 className="order__total">Order Total : {value} Rs/-</h3>
                    </>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"INR "}
            />
        </div>
    )
}

export default Order
