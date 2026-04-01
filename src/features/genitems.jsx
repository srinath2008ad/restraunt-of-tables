import React, { useCallback, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useAddorderMutation, useLazyGettablesQuery } from '../services/tablesapi';

const Genitems = (props) => {
    var x = useLocation();
    var [addorder] = useAddorderMutation();
    var [getlatesttables, { data }] = useLazyGettablesQuery();

    useEffect(() => {
        getlatesttables();
    }, [])

    var current_table = data?.find((table) => table.id === x.state.id)

    var order = useCallback(() => {
        var table = {
            ...current_table,
            order: [...current_table.order, props.item]
        }
        addorder({ data: table, id: x.state.id }).then(() => {
            alert("item added"),
                getlatesttables();
        })
    }, [current_table,props.item,x.state.id,addorder,getlatesttables])
    console.log(props.item.itemName,"rerendered")
    return (
        <div>
            <div className="card w-90">
                <img src={props.item.itemImage} height={200} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.item.itemName}</h5>
                    <p className="card-text">Price:{props.item.itemPrice}</p>
                    <button className="btn btn-primary" onClick={() => { order() }}>Add Order</button>
                </div>
            </div>

        </div>
    )
}

export default React.memo(Genitems)
