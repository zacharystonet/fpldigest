import {getJSON, reqType} from './baseRequest';

const getGW = () => {
  const data = getJSON(`${reqType.bootstrap}`);
  return data
/*   for (let i in data.events) {
    if (data.events[i].is_current) {
        console.log(data.events[i].id)
        return data.events[i].id
        
    }
  } */
  
}

export default getGW;