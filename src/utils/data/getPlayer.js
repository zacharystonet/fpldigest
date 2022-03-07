import {getJSON, reqType} from './baseRequest';

const getPlayer = (id) => {
  const data = getJSON(`${reqType.element}${id}/`);
  return data;
}

export default getPlayer;