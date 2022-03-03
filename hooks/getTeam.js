import { reqType, getJSON} from '../hooks/baseRequest';


const getTeam = (id) => {
  const data = getJSON(`${reqType.entry}/${id}/`)
  return data;
}

export default getTeam;