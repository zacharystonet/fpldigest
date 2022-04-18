import { atom, selector } from "recoil";
 import ls from "local-storage"

    //returns the id of the team a user selected as favorite
    function getFavTeam() { 
         if (typeof window !== 'undefined') {
            for (let i = 0; i < localStorage.length; i++){
                let key = ls.get(localStorage.key(i));
                if (key.favorite == true) {
                    return key.id
                }
            }
            return null  
        }
        
    }

    function getFirstFollowedTeam() { 
         if (typeof window !== 'undefined') {
            for (let i = 0; i < localStorage.length; i++){
                let key = localStorage.key(i);
                if (key.includes("Profile", 0)) {
                    let teamInfo = ls.get(key)
                    return teamInfo.id
                }
            }
            return null
        } 
        
    }

const mySelector = selector({
    
    key: 'mySelector',
    get:  ({get}) => {
         let favTeam = getFavTeam();
        let followedTeam = getFirstFollowedTeam();
        // check for fav team
        if (!!favTeam) {
            return favTeam
        } else if (!!followedTeam) { 
            // no fav team so get a followed team
            return followedTeam
        } else {
            // no followed team so set to hogcrankers fc
            return 27356
            }
        } 
        
}) 

export const teamIdState = atom({
    key: "teamIdState",
    default: mySelector,
})

export const teamIdForm = atom({
    key: "teamIdForm",
    default: null,
})



