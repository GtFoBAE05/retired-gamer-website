import style from '../hero-section/hero-section.module.css';
import logo from '../../../assets/images/spr_company_icon_1024.png'

export default function Hero(){
    return (
        <>
            <div className={style.heroSectionContainer}>
                <img className={style.logoImage} src={logo} alt=""/>
                <div className={style.textContainer}>
                    <h2 >From gamers to creators, we build immersive experiences that bring your game vision to life.</h2>
                </div>
            </div>
        </>
    );
}