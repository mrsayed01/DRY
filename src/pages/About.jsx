import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import PageHeader from "../components/PageHeader";
import AboutDRY from "../components/AboutDRY";
import States from "../components/States";

export default function About() {
    return (
        <>
            <Navbar />
            <PageHeader title="About Us" path="/about" name="About Us" />
            <AboutDRY />
            <States />
            <Footer />
            <BackToTop />
        </>
    );
}
