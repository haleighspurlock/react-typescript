import { useState } from "react";
// import Message from "./Message";

function App() {
  const [game, setGame] = useState ({
    id: 1,
    player: {
      name: 'Oliver',
    }
  })

  const handleClick = () => {
    setGame({...game, player: {...game.player, name: 'Twohy'} })
  }
  
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;