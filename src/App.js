import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Book from "./components/Book";

//iki temel route oluşturuldu ana sayfa ve dinamik kitap detayları sayfası
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:index" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
