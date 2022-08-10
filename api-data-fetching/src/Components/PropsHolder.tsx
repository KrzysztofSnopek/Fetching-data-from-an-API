import React, { useState, useEffect } from "react";
import axios from "axios";
import { WorldList } from "./WorldList";
import { WorldCard } from "./WorldCard";

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

export function PropsHolder(): JSX.Element {
    const [worldNames, setWorldNames] = useState([]);
    const [worldProps, setWorldProps] = useState([]);
    // const name = axios.get(`https://api.tibiadata.com/v3/worlds/`);

    // gets the list of worlds' names
    useEffect(() => {
        getAllWorlds().then((response) => {
        const allWorlds = response.data.worlds.regular_worlds;
        const worldNames = allWorlds.map((world: World) => {
            return world.name
        });
        setWorldNames(worldNames);
    });
    }, []);

    // gets objects of worlds with their most important characteristics
    useEffect(() => {
        getAllWorlds().then((response) => {
        const allWorlds = response.data.worlds.regular_worlds;
        const allWorldProps = allWorlds.map((world: World) => {
            return {
                    wname: world.name,
                    wlocation: world.location,
                    wplayers_online: world.players_online,
                    wstatus: world.status,
                    wgame_world_type: world.game_world_type}           
        });
        setWorldProps(allWorldProps);
            });
    }, []);
    
    return(
        <div>
            <WorldList worldNames={worldNames} />
            <WorldCard worldProps={worldProps} />
            
        </div>
    );
}