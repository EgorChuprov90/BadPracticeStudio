import { Fragment } from "react";
import About from "./components/About";
import SimpleSlider from "./components/Carousel";
import Carousel from "./components/Carousel";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Games from "./components/Games";
import Header from "./components/Header";

function App() {
   return (
      <Fragment>
         <Header />
         <SimpleSlider />
         <About />
         <Games />
         <Contacts />
         <Footer />
      </Fragment>
   )
}

export default App;
