import './profileContent.css';
import Feed from '../../components/Feed/Feed';
import { useState, useEffect } from 'react';
import { fetchUserPosts } from '../../api/postsApi';
import Clickable from '../Clickable/Clickable';

export default function ProfileContent({ user }) {
	const [posts, setPosts] = useState([]);

	const [postsLoading, setPostsLoading] = useState(true);

	useEffect(() => {
		console.log('fetching posts');
		fetchUserPosts(user.id).then(response => {
			console.log('posts: ', typeof response.data);
			setPostsLoading(t => !t);
			setPosts(response.data);
		});
	}, [user]);

	return (
		<div className='profileContentContainer'>
			<div className='profileContentHeader'>
				<div className='profileBanner'>
					<img
						className='profileCover'
						src={user.coverPictrue || '/public/person/noCover.png'}
						alt='user cover'
					/>
					<img
						className='profileHeaderPicture'
						src={user.profilePicture || '/public/person/noAvatar.png'}
						alt='user profile'
					/>
				</div>
				<h2 className='profileCoverName'>{user.username || 'unknown'}</h2>
				<span className='profileCoverDesc'>{user.desc || ''}</span>
			</div>
			<div className='profileContentBody'>
				{!postsLoading && (
					<Feed posts={posts} userToShowId={user.id} user={user} />
				)}
				<div className='profileBodyUser'>
					<div className='profileBodyUserInfo'>
						<h2>User Information</h2>
						<span>
							<b>City: </b> {user.City || 'unknown'}
						</span>
						<span>
							<b>From: </b>
							{user.from || 'unknown'}
						</span>
						<span>
							<b>Relationship: </b>
							{user.relationship === 1
								? 'single'
								: user.relationship === 2
								? 'married'
								: 'unknown'}
						</span>
					</div>
					<h2>User Friends</h2>
					<div className='profileBodyUserFriends'>
						{user.friends.map(friend => {
							return (
								<Clickable
									key={friend.id}
									onClick={() => {
										// setUserLoading(true)
										// setPostsLoading(true)
									}}
									link={`/profile/${friend.id}`}
								>
									<div className='profileBodyFriend'>
										<img src={friend.profilePicture} alt='' />
										<span>{friend.username}</span>
									</div>
								</Clickable>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
