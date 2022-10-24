import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Books from "./components/Books/Books";
import FullBook from "./components/Books/FullBook";
import Header from "./components/Navbar/Header";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />

      <Routes>
        <Route path="/" element={<Books searchValue={searchValue} />} />
        <Route path="/book/:id" element={<FullBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
