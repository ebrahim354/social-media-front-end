import './post.css'
import { MoreVert, ThumbUp } from '@material-ui/icons'
import { useState, useEffect } from 'react'
import { toggleLike } from '../../api/postsApi'
import { timeSince } from '../../utils/dateUtils'
import Clickable from '../Clickable/Clickable'

// we need the current userId to be seen by the entire app solve this later with context api
const Post = ({ post, userId }) => {
	const [liked, setLiked] = useState(false)
	const [likesCnt, setLikesCnt] = useState(0)

	// console.log('userId:', userId)
	console.log('post:', post)

	// need to check if the post is liked before that or not to set up the like button to blue or black
	useEffect(() => {
		if (!post) return <div>loading...</div>
		setLikesCnt(post.likes.length)
		if (post.likes.find(id => userId === id)) setLiked(true)
	}, [post, userId])

	const handleLike = () => {
		toggleLike(post.id)
			.then(res => res.data)
			.then(data => {
				console.log(data)
				if (data) {
					setLikesCnt(likesCnt + 1)
					console.log('you liked the post')
				} else {
					setLikesCnt(likesCnt - 1)
					console.log('you unliked the post')
				}
			})
		setLiked(l => !l)
	}

	return (
		<div className='post'>
			<div className='postWrapper'>
				<div className='postHeader'>
					<div className='postImgContainer'>
						<Clickable link={`/profile/${post.author.id}`}>
							<img
								src={
									post.author.profilePicture || '/public/person/noAvatar.png'
								}
								alt=''
							/>
						</Clickable>
						<span className='postAuthor'>{post.author.username}</span>
						<span className='postTime'>{timeSince(post.createdAt)}</span>
					</div>
					<div className='dropDownMenu'>
						<MoreVert />
					</div>
				</div>
				<div className='postContent'>
					<div className='postDesc'>{post.description}</div>
					<img src={post.img} alt='' />
				</div>
				<div className='postFooter'>
					<div className='postFooterContainer'>
						{/* <img src='/assets/like.png' alt='' /> */}
						{/* <img src='/assets/heart.png' alt='' /> */}
						<ThumbUp
							className='postFooterLike'
							onClick={handleLike}
							style={{ color: liked ? 'blue' : 'black' }}
						/>
						<span>{likesCnt} people like this</span>
					</div>
					<span>9 comments</span>
				</div>
			</div>
		</div>
	)
}

export default Post
