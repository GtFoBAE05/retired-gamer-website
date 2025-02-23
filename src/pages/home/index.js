//home
import HeroSection from "../../components/home/hero-section"
import OurGames from "../../components/home/our-games";
import OurServices from "../../components/home/service-section";
import Footer from "../../components/footer";

export default function HomePage() {

    return (
        <>
            <HeroSection/>
            <OurGames/>
            <OurServices/>
            <Footer/>
        </>
    )
}