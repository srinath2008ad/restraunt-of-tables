import React from 'react'
import { useAdditmesMutation,useLazyGetitemsQuery } from '../services/itemsapi'
import { useFormik } from 'formik';

const Additems = () => {
    var [additems] = useAdditmesMutation();
    var [getlatestitems] = useLazyGetitemsQuery();
    var additem = useFormik({
        initialValues:{
            itemName:"",
            itemPrice:0,
            itemImage:""
        },
        onSubmit:(values)=>{
            additems(values).then(()=>{
                alert("item added"),
                getlatestitems()
            })
        }
    })
  return (
    <div  className='m-3'>
      <form onSubmit={additem.handleSubmit}>
        <input type="text" {...additem.getFieldProps("itemName")} placeholder='Enter Item Name'/>
        <br/>
        <input type="number" {...additem.getFieldProps("itemPrice")} placeholder='Enter Price' />
        <br/>
        <input type="text" {...additem.getFieldProps("itemImage")} placeholder='Enter Image'/>
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default React.memo(Additems)
