import { useState } from 'react';
import { WorldCard } from './WorldCard';
import { WorldStyled } from '../Styles/World.styled';

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
        <WorldStyled>
            <select id='world' onChange={handleView}>
                {worldNames.map((world, index) => {
                    return(
                        <option value={world} key={index}>{world}</option>
                    )
                })}
            </select>
            <WorldCard worldInfo={worldInfo} selectedId={selectedId} />
        </WorldStyled>
    )
}
