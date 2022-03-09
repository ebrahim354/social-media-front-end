import axios from 'axios'

const url = 'http://localhost:5000'
const userRoute = '/api/users'

const config = {
	headers: { Authorization: null },
}

export const getLoggedUser = () => {
	console.log('fetching logged user...')
	return axios.get(url + userRoute, config).then(response => response.data)
}
export const setUserToken = newToken => {
	config.headers.Authorization = `Bearer ${newToken}`
}

export const getUser = id => {
	return axios.get(`${url + userRoute}/${id}`, config).then(res => res.data)
}

export const updateUser = updates => {
	return axios.put(url + userRoute, { updates }, config).then(res => res.data)
}

export const deleteUser = () => {
	return axios.delete(url + userRoute, config).then(res => res.data)
}
