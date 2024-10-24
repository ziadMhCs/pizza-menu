import React from "react";
import "./index.css";
import reactDOM, { createRoot } from "react-dom/client";
const pizzaData = [
  {
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
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>fast pizza co.</h1>
    </header>
  );
}
function Menu() {
  console.log("welcome!!");

  return (
    <main className="menu">
      <h2>Menu:</h2>
      <ul className="pizzas">
        {
        pizzaData.map((pizza) => (
          <Pizza key={pizza.name} pizzaObj={pizza} />
        ))
        }ى  
      </ul>

      {/* <Pizza /> */}
    </main>
  );
}
function Footer() {
  return (
    <footer className="footer">
      it's {new Date().toLocaleTimeString()}, we're open
    </footer>
    // React.createElement("h1",null,"here is the footer")
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.pizzaObj.photoName} alt="spinaci" />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>

        {/* pass it as a number */}
        <span>price </span>
      </div>
    </div>
  );
}

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

