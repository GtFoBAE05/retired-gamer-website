//home
import HeroSection from "../../components/home/hero-section"
import OurGames from "../../components/home/our-games";
import OurServices from "../../components/home/service-section";
import ContactUs from "../../components/home/contact-us";
import Footer from "../../components/footer";

export default function HomePage() {

    return (
        <>
               <HeroSection/>
               <OurGames/>
               <OurServices/>
               <ContactUs/>
               <Footer/>
        </>
    )
}