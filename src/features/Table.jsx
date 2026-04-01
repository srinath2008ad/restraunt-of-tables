import React, { useEffect,useMemo } from 'react'
import { useGettablesQuery } from '../services/tablesapi'
import Gentable from './gentable';
import { Outlet } from 'react-router-dom';


const Table = () => {
    var { isLoading: tablesloading, data: tabels } = useGettablesQuery();
    const tableList = useMemo(() => {
        return tabels?.map((table, i) => (
            <Gentable table={table} key={i} />
        ));
    }, [tabels]);
    return (
        <div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",gap:"10px"}}>
                {tableList}
            </div>
            <Outlet />
        </div>
    )
}

export default React.memo(Table)
