import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Javascript from "./components/Javascript";
import Footer from "./components/Footer";
import About from "./components/About";
import NoPage from "./components/NoPage";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          {/* Use "/*" at the end of the parent or it will not go deeper */}
          <Route path="/javascript/*" element={<Javascript />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
