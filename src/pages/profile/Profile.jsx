import './profile.css';
import Topbar from '../../components/Topbar/Topbar';
import Leftbar from '../../components/Leftbar/Leftbar';
import ProfileContent from '../../components/ProfileContent/ProfileContent';
import { userContext } from '../../context/UserContext';
import { useContext } from 'react';

export default function Profile() {
	const { user } = useContext(userContext);

	if (!user) return <div>loading..</div>;
	return (
		<>
			<Topbar />
			<div className='profileContainer'>
				<Leftbar user={user} />
				<ProfileContent user={user} />
			</div>
		</>
	);
}
