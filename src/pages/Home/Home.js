import Topbar from '../../components/Topbar/Topbar';
import Rightbar from '../../components/Rightbar/Rightbar';
import Leftbar from '../../components/Leftbar/Leftbar';
import Feed from '../../components/Feed/Feed';
import { fetchTimeline } from '../../api/postsApi';
import { useContext, useEffect, useState } from 'react';
import './Home.css';
import { userContext } from '../../context/UserContext';

const Home = () => {
	const { user } = useContext(userContext);
	console.log('home context: ', user);
	const [timeline, setTimeline] = useState([]);

	useEffect(() => {
		if (!user) return;
		fetchTimeline()
			.then(data => {
				setTimeline(data);
			})
			.catch(err => {
				console.log(err.response.data);
				window.location.reload();
			});
	}, [user]);

	if (!user) {
		return <div>loading...</div>;
	}
	return (
		<>
			<Topbar />
			<div className='homeContainer'>
				<Leftbar user={user} />
				<Feed posts={timeline} user={user} userToShowId={user.id} />
				<Rightbar />
			</div>
		</>
	);
};

export default Home;
