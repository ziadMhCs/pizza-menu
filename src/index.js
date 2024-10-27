import React from "react";
import "./index.css";
import reactDOM, { createRoot } from "react-dom/client";
const pizzaData = [  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  const openHour=8;// for 8:00 AM
  const closeHour=23;// for 11:00 PM
  return (

    <div className="container">
      <Header />
      <Menu />
      {/* {new Date().to} */}
      <Order/>
      <Footer openHour={openHour} closeHour={closeHour} />
    </div>
  );
}
function Order(){
  return(
<div>
  <button className="btn">Order Now</button>
</div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">

      <h2>Our menu</h2>
      {(pizzaData.length>0) ?(<p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>)
      : (<p>comming&nbsp;soon...</p>)}

      <ul className="pizzas">
        {
        pizzaData.map((pizza) => (
          <Pizza key={pizza.name} pizzaObj={pizza} />
        ))
        }
      </ul>

      {/* <Pizza /> */}
    </main>
  );
 
}
function Footer({openHour,closeHour}) {
  const currentDate =new Date();
  return (
    <footer className="footer">
      it's {currentDate.toLocaleTimeString()}, {(currentDate.getHours()>=openHour && currentDate.getHours()<=closeHour ?"we're open"
        :`We're happy to welcome you between ${openHour}:00 AM and ${closeHour}:00 PM` )}
    </footer>
    // React.createElement("h1",null,"here is the footer")
  );
}

function Pizza({pizzaObj}) {
  return (
    <div className={`pizza ${(pizzaObj.soldOut)?"sold-out" :" "}`} >
      <img src={pizzaObj.photoName} alt="spinaci" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* pass it as a number */}
        <span>
          {`${pizzaObj.price} $`} 
          </span>
      </div>
    </div>
  );
}

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

