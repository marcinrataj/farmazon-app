import React from 'react';
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider/StateProvider'
import {getBasketTotal} from "../reducer/reducer";

function Subtotal(props) {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* Part of the homework */}
                            Suma ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox"/> To zamówienie zawiera prezent
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Przejdź do kasy</button>
        </div>
    );
}

export default Subtotal;