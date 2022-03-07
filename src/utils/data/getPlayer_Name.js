import {getJSON, reqType} from './baseRequest';

const getPlayer_Name = (id) => {
  const data = getJSON(`${reqType.bootstrap}`);
  for (var i in data.elements) {
      var item = data.elements[i]
      if (item.id == id) {
          console.log(item.second_name)
          return item.second_name;
      }
  }
}

export default getPlayer_Name;