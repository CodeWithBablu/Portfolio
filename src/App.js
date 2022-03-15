//import Global style
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./pages/Nav";

//import all pages
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs";
import MyWork from "./pages/MyWork";
import MovieDetails from "./pages/MovieDetails";

//Router
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Routes>

        {/* //<< For About-us Page */}    
          <Route path="/" element={<AboutUs/>} />   
        {/* About-us End //>>*/}


        {/* //<< For Contact-us Page */}
          <Route path="/contact" element={<ContactUs/>}/>
        {/* Contact-us End //>>*/}
            

        {/* //<< For Mywork Page */}
          <Route path="/mywork" element={<MyWork/>} />

              {/* Child Routes */}
              <Route path="/mywork/:id" element={<MovieDetails/>} />
        
        {/* MyWork End //>>*/}



      </Routes>
    </div>
  );
}

export default App;
