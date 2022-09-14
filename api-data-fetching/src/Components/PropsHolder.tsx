import React, { useState, useEffect } from "react";
import axios from "axios";
import { WorldList } from "./WorldList";
import { WorldListStyled } from "../Styles/WorldList.styled";

const url = 'https://api.tibiadata.com/v3/';
const getAllWorlds = () => {
    return axios.get(`${url}worlds`)
}

export interface WorldData {
    game_world_type: string;
    location: string;
    name: string;
    players_online: 0;
    status: string;
    }

export function PropsHolder(): JSX.Element {
    const [worldNames, setWorldNames] = useState([]);
    const [worldInfo, setWorldInfo] = useState([]);

    // gets the list of worlds' names
    useEffect(() => {
        getAllWorlds().then((response) => {
        const allWorlds = response.data.worlds.regular_worlds;
        const worldNames = allWorlds.map((world: WorldData) => {
            return world.name
        });
        setWorldNames(worldNames);
    });
    }, []);

    // gets objects of worlds with their most important characteristics
    useEffect(() => {
        getAllWorlds().then((response) => {
        const allWorlds = response.data.worlds.regular_worlds;
        const allWorldInfo = allWorlds.map((world: WorldData) => {
            return {
                    name: world.name,
                    location: world.location,
                    players_online: world.players_online,
                    status: world.status,
                    game_world_type: world.game_world_type}           
        });
        setWorldInfo(allWorldInfo);
            });
    }, []);
    

    return(
        <WorldListStyled>
            <div className="center-box">
                <WorldList worldNames={worldNames} worldInfo={worldInfo} /> 
            </div>           
        </WorldListStyled>
    );
}