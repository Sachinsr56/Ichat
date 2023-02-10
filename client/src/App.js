import './App.css';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from './components/home';
import Chats from './components/chats';
import ChatProvider from './Context/ChatProvider';

function App() {
  return (
    <div className="App">
      <Router>
      <ChatProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
      </ChatProvider>
    </Router>
    </div>
  );
}

export default App;
