import style from './service-item.module.css';

export default function ServiceItem(props) {
    return (
        <div className={style.serviceItemContainer}>
            <img className={style.serviceItemImage} src={props.image} alt=""/>
            <div className={style.serviceItemTextContainer}>
                <h2>{props.serviceName}</h2>
                <p>{props.serviceDescription}</p>
            </div>
        </div>
    );
}
