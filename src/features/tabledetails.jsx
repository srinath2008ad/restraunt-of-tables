import React,{useMemo} from 'react'
import { useLocation } from 'react-router-dom'
import { useGetitemsQuery } from '../services/itemsapi';
import Genitems from './genitems';
import Billing from './billing';
import { useParams } from 'react-router-dom';

const Tabledetails = () => {
    const { Tableid } = useParams();
    var x = useLocation();
    var { isloading: itemsloading, data: allitems } = useGetitemsQuery();
    const itemlist = useMemo(()=>{
        return allitems?.map((item,i) => { return <Genitems key={i} item={item} /> })
    })
    return (    
        <div>
            <div className="card w-80">
                <div className="card-body">
                    <h1 className="card-title">{x.state.tableName}</h1>
                    <p className="card-text">Capacity {x.state.seats}</p>
                    <p className="card-text">Items Available</p>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"10px"}}>
                        {itemlist}
                    </div>
                    <Billing state = {x.state} tableid={Tableid}></Billing>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Tabledetails)
