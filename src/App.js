import './App.css';

import { Title } from "./components/ListItem1/ListItem1"
import { Button } from "./components/ListItem2/ListItem2";
import { Description } from "./components/ListItem3/ListItem3";

function App() {
  return (
    <div className="App">
      <Title />
      <Button />
      <Description />
    </div>
  );
}

export default App;
