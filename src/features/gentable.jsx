import React from 'react'
import { Link } from 'react-router-dom'

const Gentable = (props) => {
    {console.log(props.table.tableName," rerenderd")}
    return (
        <div className='m-3'>
            <div className="card w-100">
                <div className="card-body">
                    <h5 className="card-title">{props.table.tableName}</h5>
                    <p className="card-text">Capacity   {props.table.seats}</p>
                    <p className="card-text">{(props.table.order.length>0) ? "NotAvailable" : "Available"}</p>
                    <Link to={`/Tables/Table/${props.table.id}`}  state={props.table} href="#" className="btn btn-primary">Order</Link>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Gentable)
