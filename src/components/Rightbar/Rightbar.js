import './Rightbar.css'

export const OnlineFriendsList = () => {
	return (
		<ul className='onlineFriendsList'>
			<li className='onlineFriendsItem'>
				<div className='onlineFriendsImgWrapper'>
					<img src='assets/person/7.jpeg' alt='' />
					<span className='isOnlineAlert'>.</span>
				</div>
				<span className='onlineFriendName'>Safak Kocaoglu</span>
			</li>
			<li className='onlineFriendsItem'>
				<div className='onlineFriendsImgWrapper'>
					<img src='assets/person/7.jpeg' alt='' />
					<span className='isOnlineAlert'>.</span>
				</div>
				<span className='onlineFriendName'>Safak Kocaoglu</span>
			</li>
			<li className='onlineFriendsItem'>
				<div className='onlineFriendsImgWrapper'>
					<img src='assets/person/7.jpeg' alt='' />
					<span className='isOnlineAlert'>.</span>
				</div>
				<span className='onlineFriendName'>Safak Kocaoglu</span>
			</li>
			<li className='onlineFriendsItem'>
				<div className='onlineFriendsImgWrapper'>
					<img src='assets/person/7.jpeg' alt='' />
					<span className='isOnlineAlert'>.</span>
				</div>
				<span className='onlineFriendName'>Safak Kocaoglu</span>
			</li>
			<li className='onlineFriendsItem'>
				<div className='onlineFriendsImgWrapper'>
					<img src='assets/person/7.jpeg' alt='' />
					<span className='isOnlineAlert'>.</span>
				</div>
				<span className='onlineFriendName'>Safak Kocaoglu</span>
			</li>
		</ul>
	)
}

const Rightbar = () => {
	return (
		<div className='rightbar'>
			<div className='rightbarWrapper'>
				<div className='rightbarEvent'>
					<img src='/assets/gift.png' alt='' />
					<span className='rightbarEventText'>
						<b>Pola Foster</b> and <b>3 other</b> have a birthday today.
					</span>
				</div>
				<div className='rightbarAd'>
					<img src='/assets/ad.png' alt='' />
				</div>
				<div className='rightbarOnlineFriends'>
					<h3>Online Friends</h3>
					<OnlineFriendsList />
				</div>
			</div>
		</div>
	)
}

export default Rightbar
