import style from './footer.module.css'
import logo from '../../assets/images/spr_company_icon_1024.png'
import tiktok from '../../assets/icons/tiktok.svg'
import itchio from '../../assets/icons/itchio.svg'
import email from '../../assets/icons/email.svg'

export default function Footer() {
    return (
        <>
            <div className={style.footerContainer}>
                <div className={style.footerContainerCompany}>
                    <img className={style.footerContainerCompanyIcon} src={logo} alt=""/>
                </div>
                <div className={style.footerContact}>
                    <div className={style.footerSocialMedia}>
                        <a href=""><img className={style.footerSocialMediaImage}
                                        src={itchio}
                                        alt="itch.io"/></a>
                        <a href=""><img className={style.footerSocialMediaImage}
                                        src={tiktok}
                                        alt="tiktok"/></a>

                    </div>
                    <div className={style.footerContactInformationItem}>
                        <div className={style.footerContactInformationItemImage}>
                            <img className={style.footerSocialMediaImage}
                                 src={email}
                                 alt="itch.io"/>
                        </div>
                        <h3 className={style.footerContactInformationItemText}>retiredgamer@gmail.com</h3>
                    </div>

                </div>
            </div>
        </>
    )
}