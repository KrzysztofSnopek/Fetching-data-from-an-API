type Props = {
    worldProps: object[];
}


export function WorldCard(props: Props) {
    const { worldProps } = props;

    console.log(worldProps)
    
    return (
        <div>
            {worldProps.map((singleWorld: any, index) => {
                return(
                    <ul key={index}>
                        <li>World: {singleWorld.wname}</li>
                        <li>Server: {singleWorld.wlocation}</li>
                        <li>World Status: {singleWorld.wstatus}</li>
                        <li>Players online: {singleWorld.wplayers_online}</li>
                        <li>World type: {singleWorld.wgame_world_type}</li>
                    </ul>
                )
            })}
        </div>
    )
}