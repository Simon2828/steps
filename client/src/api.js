import superagent from 'superagent'
import { API_HOST } from './config'

class Api {
    
    getAllLos = () => (
      superagent
      .get(`${API_HOST}/steps`)
    )
 
    
  }
  
  export default new Api();