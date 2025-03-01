import React, { useEffect, useState } from "react";
import "./Home.css";
import tshirt1 from'./Black T-shirt.jpg';
import tshirt2 from'./Green-sweater.jpg';
import tshirt3 from'./Red-hoodie.jpg';
import tshirt4 from'./Blue-Jacket.jpg';
import Logo1 from'./Logo1.jpg';
import axios from 'axios';
const Navbar = () => (
  <nav className="navbar">
    <img src={Logo1}alt=""/>
    <div className='Homepage'>
      <h1>WELCOME</h1>
      <p>To TRENDY world!!</p>
    </div>

    <div classNmae="parent">
      <div className="roote">
        <p>home</p>
      </div>
    </div>
    <div className="root2">
      <p>contact</p>
    </div>
    <div className="root3">
      <p>about</p>
    </div>
    <div className="root4">
      <button>Login</button>
    </div>
    <h2></h2>
  </nav>
);

const Home = () => {
  const [productData,setproductData]=useState([]);
async function getData()
{
  await axios.get("https://dummyjson.com/products").then((res)=>{setproductData(res.data.products)})
}
useEffect(() =>{
  getData();
} ,[]);
console.log(productData)

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="card">;
          <img src={tshirt1} alt="Black T-Shirt" />
          <h3>Black T-Shirt</h3>
          <p>$120</p>
          <button>Add to Cart</button>
        </div>

        <div className="card">
          <img src={tshirt2} alt="Green Sweater" />
          <h3>Green Sweater</h3>
          <p>$200</p>
          <button>Add to Cart</button>
        </div>

        <div className="card">
          <img src={tshirt3} alt="Red Hoodie" />
          <h3>Red Hoodie</h3>
          <p>$150</p>
          <button>Add to Cart</button>
        </div>

        <div className="card">
          <img src={tshirt4} alt="Blue Jacket" />
          <h3>Blue Jacket</h3>
          <p>$250</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;



