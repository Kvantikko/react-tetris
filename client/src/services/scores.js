import axios from 'axios'

const baseUrl = '/api/scores'

/**
 * Gets all the scores from server
 */
const getAll = () => axios.get(baseUrl)

/**
 * Posts a new score object to server
 */
const create = newObject => axios.post(baseUrl, newObject)

export default { getAll: getAll, create: create }