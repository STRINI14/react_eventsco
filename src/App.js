import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Packages from "./components/packages/Packages";
import Products from "./components/products/Products";
import Services from "./components/services/Services";
import Reviews from "./components/reviews/Reviews";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";



function App() {
  return (
    <div className="App">
   <Navbar/>
   <Home/>
   <About/>
   <Packages/>
   <Products/>
   <Services/>
   <Reviews/>
   <Contact/>
   <Footer/>

    </div>
  );
}

export default App;
