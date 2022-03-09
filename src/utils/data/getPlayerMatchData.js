import { reqType, getJSON } from './baseRequest';

//https://fantasy.premierleague.com/api/event/{gw}/live/
const getPlayerMatchData = (gw) => {
    const data = getJSON(`${reqType.event}/${gw}/live/`)
    return data;
}

export default getPlayerMatchData;