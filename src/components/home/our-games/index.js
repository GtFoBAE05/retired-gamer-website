import GamesItem from "./games-item";
import style from "./our-games.module.css"

//section 2
export default function OurGames() {
    return (
        <>
            <div className={style.ourGamesContainer}>
                <h2>Our Games</h2>
                <GamesItem
                    ithcIoLink="https://stinkysteak.itch.io/mythical-adventure"
                    gameName="Mythical Adventure"
                    gameDescription="Mythical Adventure is a 2D side-scrolling Idle RPG mobile game immersed in a world of fantasy and magic. Progress through floors to acquire superior gear and rewards, facing ambushes and challenging bosses on each level."
                    image="https://img.itch.zone/aW1nLzE0NTg0MzE3LnBuZw==/original/Saqm%2FY.png"/>
                <GamesItem
                    ithcIoLink="https://jonathan-benedictus.itch.io/holy-seed"
                    gameName="Holy Seed"
                    gameDescription="In this two-player co-op game, you and a partner take on the roles of ancient guardians, specifically dryad warriors, on a mission to save a dying world. The Yggdrasil tree, once a source of life, has been absorbed by greedy factions, including humans and corrupt beings. These evil forces have stolen the holy seed that once nourished the land. Your goal is to use your supernatural abilities to battle these foes, reclaim the seeds, and restore life to the world."
                    image="https://img.itch.zone/aW1nLzE3Nzk0MTY3LnBuZw==/original/a%2Ffz%2BV.png"/>
            </div>
        </>
    )
}