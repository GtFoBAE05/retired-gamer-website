import style from './service-item.module.css';

export default function ServiceItem(props) {
    return (
        <div className={style.serviceItemContainer}>
            <img src={props.image} alt=""/>
            <div className={style.serviceItemTextContainer}>
                <h3>{props.serviceName}</h3>
                <p>{props.serviceDescription}</p>
            </div>
        </div>
    );
}
