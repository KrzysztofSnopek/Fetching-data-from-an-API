import { WorldData } from "./PropsHolder";

type Props = {
    selectedId: string;
    worldInfo: object[];
}

export function WorldCard(props: Props) {
    const { worldInfo, selectedId } = props;
    
    return (
        <div>
            {worldInfo.filter((world: Partial<WorldData>) => world.name === selectedId).map((singleWorld: Partial<WorldData>, index) => {
                return(
                    <ul key={index} id={singleWorld.name}>
                        <li>World: {singleWorld.name}</li>
                        <li>Server: {singleWorld.location}</li>
                        <li>World Status: {singleWorld.status}</li>
                        <li>Players online: {singleWorld.players_online}</li>
                        <li>World type: {singleWorld.game_world_type}</li>
                    </ul>
                )
            })}
        </div>
    )
}