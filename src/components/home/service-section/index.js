import ServiceItem from "./service-item";
import style from "./service-section.module.css";
import steamdeckIcon from "../../../assets/icons/steamdeck.svg"
import consultationIcon from "../../../assets/icons/consultation.svg"
import gameIcon from "../../../assets/icons/game.svg"

export default function OurService() {
    return (
        <>
            <div className={style.servicesOuterContainer}>
                <h2>Our Services</h2>
                <div className={style.servicesContainer}>
                    <ServiceItem
                        serviceName="Game Development"
                        serviceDescription="We create innovative and high-quality games across various platforms, from indie titles to complex multiplayer experiences, ensuring engaging gameplay and seamless performance for all players."
                        image={gameIcon}/>
                    <ServiceItem
                        serviceName="Steamdeck Testing"
                        serviceDescription="We test your game’s compatibility and performance on Steam Deck, ensuring smooth gameplay, optimal controls, and seamless experience for players on this portable gaming device."
                        image={steamdeckIcon}/>
                    <ServiceItem
                        serviceName="Multiplayer Game Consultation"
                        serviceDescription="We provide expert guidance on designing and optimizing multiplayer experiences, ensuring balanced gameplay, smooth matchmaking, and an engaging player experience for both casual and competitive players."
                        image={consultationIcon}/>
                </div>
            </div>

        </>
    )
}
