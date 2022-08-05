import React, { useState, useEffect } from "react";
import axios from "axios";
import { WorldList } from "./WorldList";

const url = 'https://api.tibiadata.com/v3/';
const getAllWorlds = () => {
    return axios.get(`${url}worlds`)
}

type World = {
    battleye_date: string,
    battleye_protected: false,
    game_world_type: string,
    location: string,
    name: string,
    players_online: 0,
    premium_only: false,
    pvp_type: string,
    status: string,
    tournament_world_type: string,
    transfer_type: string
    }

export function CharacterCard(): JSX.Element {
    const [worlds, setWorlds] = useState([]);
    // const name = axios.get(`https://api.tibiadata.com/v3/worlds/`);

    useEffect(() => {
        getAllWorlds().then((response) => {
        const allWorlds = response.data.worlds.regular_worlds;
        const worldNames = allWorlds.map((world: World) => {
            return world.name
        });
        setWorlds(worldNames);
    });
    }, []);

    return(
        <WorldList url={url} worlds={worlds} />
    );
}