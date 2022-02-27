//import Global style
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./pages/Nav";
//import all pages
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs";
import MyWork from "./pages/MyWork";

//Router
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Routes>

        <Route path="/" element={<AboutUs/>} />

        <Route path="/contact" element={<ContactUs/>}/>
          
        <Route path="/mywork" element={<MyWork/>} />

      </Routes>
    </div>
  );
}

export default App;
