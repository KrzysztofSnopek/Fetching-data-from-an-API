type Props = {
    worldNames: string[];
}


export function WorldList(props: Props) {
    const { worldNames } = props;
    
    return (
        <div>
            <select name="" id="">
                {worldNames.map((world, index) => {
                    return(
                        <option value={world} key={index}>{world}</option>
                    )
                })}
            </select>
        </div>
    )
}
