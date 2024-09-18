import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Viewdetails from "./Pages/Viewdetails";
import Moredetail from "./Pages/Moredetail";
import { useState } from "react";

function App() {
  const [cartArr, setcartArr] = useState([]);
  console.log(cartArr);

  function getData(ans) {
    console.log(ans);
    let yourele = {
      ...ans,
      quantity: 1,
    };
    console.log(yourele);

    // method1
    function checkitem() {
      for (let i = 0; i < cartArr.length; i++) {
        if (cartArr[i].id === ans.id) {
          return true;
        }
      }
      return false;
    }
    let result = checkitem()
    console.log(result)

    if(result===false){
      setcartArr([...cartArr, yourele]);
    }



    // method2
    let find=cartArr.find((x)=>x.id===ans.id)
    if(!find){
      // alert("item added sucessfully")
      setcartArr([...cartArr,yourele])
    }

    else{
      alert("item already exist")
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cartArr={cartArr} />
        <Routes>
          <Route path="/" element={<Home getdata={getData} />} />
          <Route
            path="/cart"
            element={<Cart cartArr={cartArr} setcartArr={setcartArr} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/view" element={<Viewdetails />} />
          <Route path="/Moredetail" element={<Moredetail />} />

          {/* <Route path='/navbar' element={<Navbar/>}   /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
