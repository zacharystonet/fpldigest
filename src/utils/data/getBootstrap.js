import {getJSON, reqType} from './baseRequest';

const getBootstrap = () => {
  const data = getJSON(`${reqType.bootstrap}`);
  return data;
}

/* export async function getBootstrap(): Promise<Bootstrap> {
  const response = await fetchPublicEndpoint(
    "https://fantasy.premierleague.com/api/bootstrap-static/"
  );

  return await response.json();
} */

export default getBootstrap;