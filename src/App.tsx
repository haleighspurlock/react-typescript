import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVistable, setAlertVisibility] =useState(false);

  return (
    <div>
      { alertVistable && <Alert onClose={() => setAlertVisibility(false)}>
        Hello <div>World</div>
      </Alert>}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
