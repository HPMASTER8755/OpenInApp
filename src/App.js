import logo from "./logo.svg";
import "./App.css";
import Login from "./Pages/signin/Login";
import Dashboard from "./Pages/Dashboard/Dashboard"
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
