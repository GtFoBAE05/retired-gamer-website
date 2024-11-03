import ServiceItem from "./service-item";
import style from "./service-section.module.css";
export default function ourService(){
    return(
        <>
            <div className={style.servicesOuterContainer}>
                <h2>Our Services</h2>
                <div className={style.servicesContainer}>
                    <ServiceItem 
                        serviceName ="Game Development" 
                        serviceDescription ="asdkmaskmda"
                        image="https://img.freepik.com/premium-vector/service-logo-template-design-vector_20029-568.jpg"/>
                    <ServiceItem 
                        serviceName ="Game Development" 
                        serviceDescription ="asdkmaskmda"
                        image="https://img.freepik.com/premium-vector/service-logo-template-design-vector_20029-568.jpg"/>
                </div>
            </div>

        </>
    )
}
