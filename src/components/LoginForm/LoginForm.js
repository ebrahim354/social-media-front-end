import './LoginForm.css';
import { useState, useContext } from 'react';
import { userContext } from '../../context/UserContext';
import { login } from '../../api/authApi';
import Alarm from '../Alarm/Alarm';

export default function LoginForm({ setShow }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { setUser } = useContext(userContext);
	const [error, setError] = useState(null);

	const changeInput = (e, setter) => {
		setter(e.target.value);
	};

	const submitHandle = e => {
		e.preventDefault();
		if (!username || !password) {
			setError('invalid username or password');
			return;
		}
		login(
			{
				username,
				password,
			},
			setUser
		).catch(err => setError(err));
	};

	const toggleShow = () => {
		setShow(s => !s);
	};
	return (
		<div className='loginFrom'>
			<form onSubmit={submitHandle}>
				{error && <Alarm err={error} />}
				<input
					placeholder='Email or Username'
					type='text'
					value={username}
					onChange={e => changeInput(e, setUsername)}
				/>
				<input
					placeholder='Password'
					type='password'
					value={password}
					onChange={e => changeInput(e, setPassword)}
				/>
				<button className='loginSubmit' type='submit'>
					Log in
				</button>
				<a href='http://www.yourmom.com'>Forgot Password?</a>
				<button
					className='loginCreateAccount'
					type='button'
					onClick={toggleShow}
				>
					Create a New Account
				</button>
			</form>
		</div>
	);
}
