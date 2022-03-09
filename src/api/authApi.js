import axios from 'axios';

const url = 'http://localhost:5000';
const authRoute = '/api/auth';

export const register = (credentials, setter) => {
	return axios
		.post(`${url + authRoute}/register`, credentials)
		.then(res => res.data)
		.then(data => {
			window.localStorage.setItem('jwt', data.token);
			console.log(data);
			console.log('registerd and logged in with user: ', data.user.username);
			setter(data.user);
		});
};

export const login = (credentials, setter) => {
	return axios
		.post(`${url + authRoute}/login`, credentials)
		.then(res => res.data)
		.then(data => {
			if (!data) throw new Error('didnt receive any data');
			window.localStorage.setItem('jwt', data.token);
			console.log('logged in with user: ', data.user.username);
			setter(data.user);
		});
};
