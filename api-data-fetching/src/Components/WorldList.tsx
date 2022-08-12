import { useState } from 'react';
import { WorldCard } from './WorldCard'

type Props = {
    worldNames: string[];
    worldInfo: object[];
}


export function WorldList(props: Props) {
    const { worldNames, worldInfo } = props;
    const [selectedId, setSelectedId] = useState<string>('Adra');

    const handleView = (event: any) => {
        setSelectedId(event.target.value);
    }
    
    return (
        <div>
            <select id='world' onChange={handleView}>
                {worldNames.map((world, index) => {
                    return(
                        <option value={world} key={index}>{world}</option>
                    )
                })}
            </select>
            <WorldCard worldInfo={worldInfo} selectedId={selectedId} />
        </div>
    )
}
