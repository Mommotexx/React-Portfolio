import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Paths from "./Components/Path/Paths";
import Project from "./Components/Project/Project";

const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Paths />
            <Project />
            <Contact />
            <Footer />
        </>
    );
};

export default App;
