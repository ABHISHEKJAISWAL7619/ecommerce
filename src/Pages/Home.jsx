import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
  const [value, setvalue] = useState([]);

const getData =async ()=>{
 try {
  let res = await fetch('https://dummyjson.com/products?limit=0&skip=0')
  let data = await res.json()
  // console.log(data.products)
  setvalue(data.products)
 } catch (error) {
  setvalue([])
 }
}

useEffect(()=>{
  getData()
  // console.log(data)
},[])


let handleclick=(ele,i)=>{
// console.log(ele)
props.getdata(ele)
}
  return (
   <div className='row p-0 m-0 justify-content-center gap-5' >
{
value.map((ele)=>{
  return <div className="card" style={{width: '18rem'}}>
  <img src={ele.thumbnail} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-truncate">{ele.title}</h5>
    <p className="card-text">${ele.price}</p>
    <Link to="/view"  state={ele} className="btn btn-primary">View Details</Link>
    <button to="/cart"onClick={()=>handleclick(ele)}  className="btn btn-primary ms-2 bg-info">Add to cart</button>
  </div>
</div>
})
}
   </div>  
  )
}

export default Home