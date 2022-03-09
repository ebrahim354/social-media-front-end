import { useEffect, useContext } from 'react';
import Home from './pages/Home/Home';
import Profile from './pages/profile/Profile.jsx';
import Login from './pages/Login/Login';
import {
	Redirect,
	Switch,
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import { setPostToken } from './api/postsApi';
import { getLoggedUser, setUserToken } from './api/userApi';
import { userContext } from './context/UserContext';
import Massenger from './pages/Massenger/Massenger';

const App = () => {
	const { user, setUser } = useContext(userContext);
	const token = window.localStorage.getItem('jwt');

	// booting the app with the stored token or when getting a new one
	useEffect(() => {
		if (token) {
			setUserToken(token);
			setPostToken(token);
			getLoggedUser()
				.then(usr => {
					console.log('received the user: ', usr);
					setUser(usr);
				})
				.catch(err => {
					// that means the token is expired
					console.log(err.response.data);
					window.localStorage.removeItem('jwt');
					setUserToken(null);
					setUser(null);
					window.location.reload();
				});
		}
	}, [token, setUser]);

	return (
		<Router>
			<Switch>
				<Route path='/profile/:id'>
					{user ? <Profile /> : <Redirect to='/login' />}
				</Route>
				<Route path='/profile'>
					{user ? <Profile /> : <Redirect to='/login' />}
				</Route>
				<Route path='/login'>{!user ? <Login /> : <Redirect to='/' />}</Route>
				<Route path='/massenger'>
					{user ? <Massenger /> : <Redirect to='/login' />}
				</Route>
				<Route path='/' exact>
					{token ? <Home /> : <Redirect to='/login' />}
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
