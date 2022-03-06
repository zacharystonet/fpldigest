import {getJSON, reqType} from './baseRequest';

const getBootstrap = () => {
  const data = getJSON(`${reqType.bootstrap}`);
  return data;
}

export default getBootstrap;