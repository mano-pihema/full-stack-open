import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

function getPersons() {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

function addPerson(person) {
  const request = axios.post(baseUrl, person)
  return request.then((res) => res.data)
}

function removePerson(id) {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request
}

export default { getPersons, addPerson, removePerson }
