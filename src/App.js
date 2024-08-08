import "./App.css";
import Greeting from "./components/Greeting";
import ShoppingList from "./components/ShoppingList";
import OrderStatus from "./components/OrderStatus";
import stylesApp from "./components/stylesApp.module.css";

const names = ["Franc", "Franchesca", "Lukas", "Parker"];
const items = ["bread", "milk", "car", "dog", "kola", "butter"];
const orders = [
  { orderId: 123, status: "wird in 3 Tage" },
  { orderId: 22, status: "warten auf die Bezalung" },
  { orderId: 332, status: "warten auf die Bezalung" },
  { orderId: 332, status: "go" },
];
function App() {
  return (
    <div style={stylesApp} className="App">
      <Greeting names={names} />
      <ShoppingList items={items} />

      <OrderStatus orders={orders} />
    </div>
  );
}

export default App;
