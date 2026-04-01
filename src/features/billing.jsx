import React, { useCallback, useEffect, useState } from 'react'
import { useAddorderMutation, useLazyGettablesQuery,useGettablesQuery } from '../services/tablesapi';


const Billing = (props) => {
    var x = props.state;
    var [getlatesttables] = useLazyGettablesQuery();
    var {isLoading,data} = useGettablesQuery();
    var [addorder] = useAddorderMutation();
    
    var current_table = data?.find((table) => table.id === props.tableid)

    const cleartable = useCallback(() => {
        var table = table = {
            ...current_table,
            order: []
        }

        addorder({ data: table, id: props.tableid}).then(() => {
            alert("table cleared"),
                getlatesttables();
        })
    }, [current_table,props.tableid,addorder,getlatesttables])


    return (
        <div>
            {/* {current_table?.order?.map((order) => { return <p>{order.itemName}</p> })} */}
            {current_table?.order.length > 0 && (
                <div>
                    <h1>Checkout</h1>
                    <div className="card" style={{ width: "18rem" }}>

                        <ul className="list-group list-group-flush">
                            {current_table?.order?.map((order, i) => {
                                return <li key={i} className="list-group-item d-flex justify-content-between"><span>{order.itemName}</span><span>{order.itemPrice}</span></li>
                            })}
                            <li className="list-group-item d-flex justify-content-between"><b>Total</b><b className='d-flex flex-column align-items-end'>{current_table.order.reduce((total, item) => total += item.itemPrice, 0)}<button onClick={cleartable} type="button" className="btn btn-primary">PAY</button></b></li>

                        </ul>
                    </div>
                </div>
            )}

        </div>
    )
}

export default React.memo(Billing)
