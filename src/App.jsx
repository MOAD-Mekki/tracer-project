import "./App.css";
import Logo from "./logo/Logo";
import Form from "./form/Form";
import Dash from "./dashboard/Dash";
import Select from "./select/Select";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logo />} />

        <Route path="/form" element={<Form />} />

        <Route path="/dashboard" element={<Dash />} />

        <Route path="/select" element={<Select />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
