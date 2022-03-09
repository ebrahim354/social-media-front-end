import './share.css'
import {
	PermMedia,
	Label,
	Room,
	EmojiEmotions,
	CloseRounded,
} from '@material-ui/icons'
import { useRef, useState } from 'react'
import { createPost } from '../../api/postsApi'

const Share = ({ profilePicture }) => {
	const [file, setFile] = useState(null)
	const chooseFileRef = useRef()
	const textInput = useRef()
	const formRef = useRef()

	// handles file input remove img
	const removeImg = e => {
		chooseFileRef.current.value = ''
		setFile(null)
	}

	const submitHandle = e => {
		e.preventDefault()
		if (!file && !textInput.current.value) {
			console.log('there is no content provided')
			return
		}
		const data = new FormData()
		// you need to give it file key-value pair the file name and the file
		// use the date to make it unique so files with the same name should differ on the server
		data.append('file', file)
		data.append('description', textInput.current.value)
		createPost(data)
			.then(res => res.data)
			.then(data => {
				console.log(data)
				window.location.reload()
			})
			.catch(err => console.log(err.data))
		for (let entry of data.entries()) console.log(entry)
	}

	// handle file input change
	const uploadFile = e => {
		console.log(e.target.files[0])
		setFile(e.target.files[0])
	}

	return (
		<div className='shareContainer'>
			<form
				ref={formRef}
				className='shareForm'
				encType='multipart/form-data'
				onSubmit={submitHandle}
			>
				<div className='shareTopWrapper'>
					<img src={profilePicture || '/public/person/noAvatar.png'} alt='' />
					<input
						ref={textInput}
						type='text'
						placeholder="what's in your mind?"
					/>
				</div>
				<hr className='shareHr' />
				<div className='shareBottomWrapper'>
					<div
						className='shareOption'
						onClick={() => {
							chooseFileRef.current.click()
						}}
					>
						<input
							type='file'
							name='file'
							ref={chooseFileRef}
							accept='.png,.jpeg,.jpg'
							className='sharePhotoChooseFile'
							onChange={uploadFile}
						/>
						<PermMedia htmlColor='tomato' className='shareIcon' />
						<span>Photo or Video</span>
					</div>
					<div className='shareOption'>
						<Label htmlColor='blue' className='shareIcon' />
						<span>Tag</span>
					</div>
					<div className='shareOption'>
						<Room htmlColor='green' className='shareIcon' />
						<span>Location</span>
					</div>
					<div className='shareOption'>
						<EmojiEmotions htmlColor='gold' className='shareIcon' />
						<span>Feelings</span>
					</div>
					<button type='submit' className='shareButton'>
						Share
					</button>
				</div>
				{file && <hr className='shareHr' />}
				{file && (
					<div className='uploadedImgContainer'>
						<CloseRounded onClick={removeImg} className='removeUploadedImg' />
						<img src={URL.createObjectURL(file)} alt='' />
					</div>
				)}
			</form>
		</div>
	)
}

export default Share
