import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/chats" exact element={<Chatpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
