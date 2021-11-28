import { useQuery } from '@apollo/client'
import { LOAD_MOVIE } from '../../GraphQL/Graph/query'



export default function MOVIE(){
const {data,error}= useQuery (LOAD_MOVIE);

if(error) {
    console.log(error)
    return null
  }


}