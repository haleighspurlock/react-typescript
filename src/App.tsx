import { useState } from "react";
// import Message from "./Message";

function App() {
  const [cart, setCart] = useState ({
    discount: .1,
    items: [
      { id: 1, title: 'product 1', quantity: 1 },
      { id: 2, title: 'product 2', quantity: 1}
    ]
  })

  const handleClick = () => {
    setCart({...cart, items: [...cart.items.map(item => item.id === 1 ? { ...item, quantity:2 } : item )] })
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;