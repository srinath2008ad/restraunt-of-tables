import { useFormik } from 'formik'
import React from 'react'
import { useAddtablesMutation, useLazyGettablesQuery} from '../services/tablesapi'

const Addtable = () => {
    const [addtable] = useAddtablesMutation()
    const [getlatesttables] = useLazyGettablesQuery() 
    const tableform = useFormik({
        initialValues:{
            tableName:"",
            seats:0,
            isAvailable:false,
            order:[]
        },
        onSubmit : (values)=>{
            addtable(values).then(()=>{
                alert("table added"),
                getlatesttables()
            })
        }
    })
  return (
    <div className='m-3'>
      <form  onSubmit={tableform.handleSubmit}>
        <input type="text" id='tableName' placeholder='Enter table name' {...tableform.getFieldProps("tableName")}/>
        <br />
        <input type="text" id='seats' placeholder='enter no of seats' {...tableform.getFieldProps("seats")}/>
        <br />
        <button type='submit'>ADD TABLE</button>
      </form>
    </div>
  )
}

export default React.memo(Addtable)
