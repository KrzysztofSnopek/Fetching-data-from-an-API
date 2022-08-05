import React from 'react'
import { CharacterCard } from './CharacterCard'


type Props = {
    url: string;
    worlds: string[];
}


export function WorldList(props: Props) {
    const { url, worlds } = props;
    
    return (
        <div>
            <select name="" id="">
                {worlds.map((world, index) => {
                    return(
                        <option value={world} key={index}>{world}</option>
                    )
                })}
            </select>
        </div>
    )
}
