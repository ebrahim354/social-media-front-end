import Topbar from '../../components/Topbar/Topbar';
import './massenger.css';
import { OnlineFriendsList } from '../../components/Rightbar/Rightbar';
import { socket } from '../../api/socketAPI';

const Message = ({ myMessage, content }) => {
	const name = myMessage ? 'leftMessage' : 'rightMessage';
	const dir = myMessage ? 'Left' : 'Right';
	return (
		<div className='messageContainer'>
			<div className={name}>
				<img src='/assets/person/noAvatar.png' alt='' className='messageImg' />
				<span className='messageContent'>
					{content ? 'some bigger content' : 'some content'}
				</span>
			</div>
			<span className={`messageTime${dir}`}>5 min ago</span>
		</div>
	);
};

const Massenger = () => {
	return (
		<div className='massenger'>
			<Topbar />
			<div className='massengerContainer'>
				<div className='massengerLeft'>
					<input
						type='text'
						placeholder='Search for friends'
						className='massengerLeftSearch'
					/>
					<hr className='massengerLeftHr' />
					<div className='leftListContainer'>
						<ul className='massengerLeftList'>
							<li className='massengerLeftItem'>
								<img
									src='/assets/person/noAvatar.png'
									alt=''
									className='leftItemImg'
								/>
								<span className='leftItemName'>some dump username1</span>
							</li>
							<li className='massengerLeftItem'>
								<img
									src='/assets/person/noAvatar.png'
									alt=''
									className='leftItemImg'
								/>
								<span className='leftItemName'>some dump username2</span>
							</li>
							<li className='massengerLeftItem'>
								<img
									src='/assets/person/noAvatar.png'
									alt=''
									className='leftItemImg'
								/>
								<span className='leftItemName'>some dump username</span>
							</li>
							<li className='massengerLeftItem'>
								<img
									src='/assets/person/noAvatar.png'
									alt=''
									className='leftItemImg'
								/>
								<span className='leftItemName'>some dump username</span>
							</li>
							<li className='massengerLeftItem'>
								<img
									src='/assets/person/noAvatar.png'
									alt=''
									className='leftItemImg'
								/>
								<span className='leftItemName'>some dump username</span>
							</li>
							<li className='massengerLeftItem'>
								<img
									src='/assets/person/noAvatar.png'
									alt=''
									className='leftItemImg'
								/>
								<span className='leftItemName'>some dump username</span>
							</li>
							<li className='massengerLeftItem'>
								<img
									src='/assets/person/noAvatar.png'
									alt=''
									className='leftItemImg'
								/>
								<span className='leftItemName'>some dump username</span>
							</li>
							<li className='massengerLeftItem'>
								<img
									src='/assets/person/noAvatar.png'
									alt=''
									className='leftItemImg'
								/>
								<span className='leftItemName'>some dump username</span>
							</li>
							<li className='massengerLeftItem'>
								<img
									src='/assets/person/noAvatar.png'
									alt=''
									className='leftItemImg'
								/>
								<span className='leftItemName'>some dump username</span>
							</li>
						</ul>
					</div>
				</div>
				<div className='massengerMiddle'>
					<ul className='massengerMiddleSpace'>
						<Message myMessage={true} content={true} />
						<Message myMessage={false} />
						<Message myMessage={false} />
						<Message myMessage={true} />
						<Message myMessage={true} />
						<Message myMessage={true} />
						<Message myMessage={true} />
						<Message myMessage={true} />
						<Message myMessage={true} />
					</ul>
					<form className='sendMessageForm'>
						<input
							className='sendMessageInput'
							placeholder='Write something...'
							type='description'
						/>
						<button className='sendMessageButton' type='submit'>
							send
						</button>
					</form>
				</div>
				<div className='massengerRight'>
					<OnlineFriendsList />
				</div>
			</div>
		</div>
	);
};

export default Massenger;
