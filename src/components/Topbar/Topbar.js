import './Topbar.css';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../context/UserContext';
import { useContext } from 'react';

const Topbar = () => {
	const { user, setUser } = useContext(userContext);

	const history = useHistory();
	const logoClickHandle = () => {
		history.push('/');
	};

	const handleLogout = () => {
		setUser(null);
		window.localStorage.removeItem('jwt');
		window.location.reload();
	};

	const profilePictureClick = () => {
		history.push('/profile');
	};
	const massengerClick = () => {
		history.push('/massenger');
	};
	return (
		<div className='topbarContainer'>
			<div className='topbarLeft'>
				<span className='logo' onClick={logoClickHandle}>
					LiFacebook
				</span>
			</div>
			<div className='topbarCenter'>
				<div className='searchBar'>
					<Search />
					<input
						placeholder='Search for friends, posts, videos'
						type='text'
						className='searchInput'
					/>
				</div>
			</div>
			<div className='topbarRight'>
				<div className='topbarLinks'>
					<span className='topbarLink' onClick={handleLogout}>
						Logout
					</span>
					<span className='topbarLink' onClick={() => window.location.reload()}>
						Timeline
					</span>
				</div>
				<div className='topbarIcons'>
					<span className='topbarIcon'>
						<Person />
						<span className='topbarIconAlert'>1</span>
					</span>
					<span className='topbarIcon'>
						<Chat onClick={massengerClick} />
						<span className='topbarIconAlert'>2</span>
					</span>
					<span className='topbarIcon'>
						<Notifications />
						<span className='topbarIconAlert'>3</span>
					</span>
				</div>
				<img
					className='pfpc'
					alt='profile'
					src={user.profilePicture || '/public/person/noAvatar.png'}
					onClick={profilePictureClick}
				/>
			</div>
		</div>
	);
};

export default Topbar;
