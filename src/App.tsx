import { useState } from "react";
// import Message from "./Message";
import produce from 'immer';

function App() {
  const [bugs, setBugs] = useState ([
    {id: 1, title: 'bug 1', fixed: false},
    {id: 2, title: 'bug 2', fixed: false},
  ]);

  const handleClick = () => {
    //setBugs(bugs.map(bug => bug.id === 1 ? {...bug, fixed: true} : bug))
    setBugs(produce(draft => {
      const bug = draft.find(bug => bug.id === 1)
      if (bug) bug.fixed = true; 
    }))
  }
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;