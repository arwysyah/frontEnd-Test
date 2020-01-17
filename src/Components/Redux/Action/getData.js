import Axios from 'axios'

export const getData = () =>{
    return{ 
        type : 'GET_DATA',
        payload : Axios.get("https://cors-anywhere.herokuapp.com/http://gymia-shorty.herokuapp.com/d325") 
    }
}