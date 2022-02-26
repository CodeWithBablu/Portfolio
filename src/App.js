//import Global style
import GlobalStyle from "./components/GlobalStyle";
//import all pages
import AboutUs from "./pages/AboutUs"

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <AboutUs/>
    </div>
  );
}

export default App;
