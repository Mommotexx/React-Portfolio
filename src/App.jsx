import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Paths from "./Components/Path/Paths";

const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Paths />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
