import React, {  } from 'react'

const Cart = (props) => {
  console.log(props.cartArr)

let sum =0;
for(let i=0; i<props.cartArr.length;i++)
{
sum=sum+props.cartArr[i].price
} 

  const handledelete=(ele,index)=>{
    console.log(ele,index)
    let copyArr=[...props.cartArr]
    copyArr.splice(index,1)
    // console.log(props.cartArr)
    // console.log(copyArr)
    props.setcartArr(copyArr)

    }
    const handleincrement=(ele,index)=>{
      console.log(ele)
      console.log(index)
      let updatedele={
        ...ele,
        quantity:ele.quantity+1,
        price:ele.price + (ele.price/ele.quantity)
      }
      console.log(updatedele)//
      let copyArr=[...props.cartArr]
      copyArr[index]=updatedele
      props.setcartArr(copyArr)


    }
    const handledecrement=(ele,index)=>{
let updatedele={
  ...ele,
  quantity:ele.quantity-1,
  price:ele.price - (ele.price/ele.quantity)
}
if(updatedele.quantity<1){
  handledelete(ele,index)
  return
}

console.log(updatedele)//
let copyArr=[...props.cartArr]
copyArr[index]=updatedele
props.setcartArr(copyArr)
    }

  return (
    <div>

{  props.cartArr.length>0 &&<table className="table align-middle">
  <thead>
    <tr>
      <th scope="col">Sno</th>
      <th scope="col">product</th>
      <th scope="col">title</th>
      <th scope="col">price</th>
      <th scope="col">Quantity</th>
      <th scope="col">  </th>
    </tr>
  </thead>
  <tbody>
    
  </tbody>

  {props.cartArr.map((ele,index)=>{
    return <tr>
<th scope='row'> {index+1}</th>
<td><img  src={ele.thumbnail } alt="" /></td>
<td>{ele.title}</td>
<td>{Math.ceil(ele.price)}</td>
<td> <button className='bg-info' onClick={()=>(handleincrement(ele,index))} >+</button>{ele.quantity} <button className=' bg-info' onClick={()=>(handledecrement(ele,index))}>-</button> </td>
 <td><button className='bg-danger' onClick={()=>handledelete(ele,index)}   >Delete</button></td> 
    </tr>
  })}
</table>}


{!props.cartArr.length && <h1 className='text-center'>
please add some item to display</h1> }
{sum>0 && <h1 className='text-center my-2'>Total=${Math.ceil(sum)}</h1>
}





    </div>
  )
}

export default Cart