import React from 'react';
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'

function Subtotal(props) {
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Suma (0 items):<strong>0</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox"/> To zamówienie zawiera prezent
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}                //part of the homework
                displayType={'text'}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Przejdź do kasy</button>
        </div>
    );
}

export default Subtotal;