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
                <div className={style.gameItemTextContainer}>
                    <h3>{props.gameName}</h3>
                    <p>{props.gameDescription}</p>
                </div>

                <img src={props.image} alt=""/>

            </div>
        </>
    )
}