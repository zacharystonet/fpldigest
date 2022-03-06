import { reqType, getJSON} from './baseRequest';


const getManagerInfo = (id) => {
  const data = getJSON(`${reqType.entry}/${id}/`)
  return data;
}

export default getManagerInfo;