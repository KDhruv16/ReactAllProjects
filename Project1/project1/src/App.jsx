// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Details from "./Details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/1" element={<Details />} />
    </Routes>
  );
}

export default App;
