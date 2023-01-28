import { Fragment, useEffect } from "react";
import About from "./components/About";
import SimpleSlider from "./components/SimpleSlider";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Games from "./components/Games";
import Header from './components/Header'
import getMove from './components/contats';
import getAnimate from "./components/head";


function App() {
   useEffect(() => getMove());
   useEffect(() => getAnimate());
   return (
      <Fragment>
         <div className="wrapper">
            <Header />
            <SimpleSlider />
            <About />
            <Games />
            <Contacts />
            <Footer />
         </div>
      </Fragment>
   )
}

export default App;
