import style from './games-item.module.css'

export default function GamesItem(props) {

    function handleClick() {
        window.open(props.ithcIoLink, "_blank");
    }

    return (
        <>
            <div
                onClick={handleClick}
                className={style.gameItemContainer}>
                <img className={style.gameImage} src={props.image} alt=""/>
                <div className={style.gameItemTextContainer}>
                    <h2>{props.gameName}</h2>
                    <p>{props.gameDescription}</p>
                </div>
            </div>
        </>
    )
}