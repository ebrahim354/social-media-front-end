import './Leftbar.css'
import {
	Bookmark,
	RssFeed,
	Chat,
	VideoLabel,
	Group,
	QuestionAnswer,
	Event,
	Business,
	School,
} from '@material-ui/icons'
import Clickable from '../Clickable/Clickable'

const Leftbar = ({ user }) => {
	if (!user) return <div>loading...</div>
	return (
		<div className='leftbar'>
			<div className='leftbarWrapper'>
				<ul className='leftbarList'>
					<li className='leftbarItem'>
						<RssFeed />
						<span>Feed</span>
					</li>
					<li className='leftbarItem'>
						<Chat />
						<span>Chats</span>
					</li>
					<li className='leftbarItem'>
						<VideoLabel />
						<span>Videos</span>
					</li>
					<li className='leftbarItem'>
						<Group />
						<span>Groups</span>
					</li>
					<li className='leftbarItem'>
						<Bookmark />
						<span>Bookmarks</span>
					</li>
					<li className='leftbarItem'>
						<QuestionAnswer />
						<span>Questions</span>
					</li>
					<li className='leftbarItem'>
						<Business />
						<span>Jobs</span>
					</li>
					<li className='leftbarItem'>
						<Event />
						<span>Event</span>
					</li>
					<li className='leftbarItem'>
						<School />
						<span>Courses</span>
					</li>
				</ul>
				<button className='leftbarButton'>Show more</button>
				<hr className='leftbarHr' />
				<ul className='leftbarFriendsList'>
					{user.friends.map(friend => {
						return (
							<Clickable link={`/profile/${friend.id}`}>
								<li className='leftbarFriend'>
									<img
										className='leftbarFriendImg'
										src={friend.profilePicture || '/public/person/noAvatar.png'}
										alt=''
									/>
									<span>{friend.username}</span>
								</li>
							</Clickable>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Leftbar
