import GamesItem from "./games-item";
import style from "./our-games.module.css"
import maThumbnail from "../../../assets/images/ma.webp"
import hsThumbnail from "../../../assets/images/hs.jpg"

//section 2
export default function OurGames() {
    return (
        <>
            <div className={style.ourGamesContainer}>
                <h2 className={style.ourGameTitle}>Our Games</h2>
               <div className={style.ourGamesItemLists}>
                   <GamesItem
                       ithcIoLink="https://stinkysteak.itch.io/mythical-adventure"
                       gameName="Mythical Adventure"
                       gameDescription="Mythical Adventure is a 2D side-scrolling Idle RPG mobile game immersed in a world of fantasy and magic. Progress through floors to acquire superior gear and rewards, facing ambushes and challenging bosses on each level."
                       image= {maThumbnail}/>
                   <GamesItem
                       ithcIoLink="https://jonathan-benedictus.itch.io/holy-seed"
                       gameName="Holy Seed"
                       gameDescription="In this two-player co-op game, you and a partner take on the roles of ancient guardians, specifically dryad warriors, on a mission to save a dying world. The Yggdrasil tree, once a source of life, has been absorbed by greedy factions, including humans and corrupt beings. These evil forces have stolen the holy seed that once nourished the land. Your goal is to use your supernatural abilities to battle these foes, reclaim the seeds, and restore life to the world."
                       image={hsThumbnail}/>
               </div>
            </div>
        </>
    )
}