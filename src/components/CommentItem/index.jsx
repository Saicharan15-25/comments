import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {name, commentText} = commentDetails

  return (
    <>
      <li className='list-container'>
        {name && <p className='logo-name'>{name[0].toUpperCase()}</p>}
        <div className='commentItem-container'>
          <p className='para-name'>{name}</p>
          <p className='para-commentText'>{commentText}</p>
        </div>
      </li>
      <hr />
    </>
  )
}

export default CommentItem
