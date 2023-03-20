import { useState } from "react";
// import Message from "./Message";

function App() {
  const [pizza, setPizza] = useState ({
    name: 'Spicy Pepperoni',
    toppings: ['Mushrooms']
  })

  const handleClick = () => {
    setPizza({...pizza, toppings: [...pizza.toppings, 'Cheese'] })
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;