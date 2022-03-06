import {getJSON, reqType} from './baseRequest';
import { useEffect, useState } from "react";
import getBootstrap from './getBootstrap';


const getPlayer_Name = (id) => {
        var i = 0;
        getBootstrap().then(data => {
            for (i=0; i < data.elements.length; i++) {
                if (data.elements[i].id == id) {
                    return data.elements[i].second_name
                }                
            }
        })
  }

export default getPlayer_Name;