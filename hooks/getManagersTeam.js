import { reqType, getJSON } from './baseRequest';

//https://fantasy.premierleague.com/api/entry/{manager_id}/event/{event_id}/picks/
const getManagersTeam = (id,gw) => {
    const data = getJSON(`${reqType.entry}/${id}/event/${gw}/picks/`)
    return data;
}

export default getManagersTeam;