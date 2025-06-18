import './index.css'
import CommentItem from '../CommentItem';
import { useState } from 'react';


const Comments = () =>{
  const [name, setInputName] = useState('');
  const [commentText, setCommentName] = useState('');
  const [commentList, setcommentList]= useState([])

  const onChangename=(e)=>setInputName(e.target.value)
  const onChangecomment=(e)=>setCommentName(e.target.value)

  const onAddSubmit=(e)=>{
    e.preventDefault();
    setInputName('')
    setCommentName('')
    const newcomment={
      name,
      commentText,
    }
    setcommentList(preventcomments=>[...preventcomments, newcomment])
  }

 return(
  <div className='comment-container'>
    <p className='comment-para'>Comments</p>
    <form className='form-style' onSubmit={onAddSubmit}>
      <input className='comment-input' type="text" placeholder="Your name" value={name} onChange={onChangename} />
      <textarea className='text-area-comment' placeholder="Your comment" rows="6" value= {commentText} onChange={onChangecomment} />
      <button className='button-comment'   type="submit">Comment</button>
    </form>
    <div>
      {commentList.map((eachItem)=>(
        <CommentItem commentDetails={eachItem} />
      ))}
    </div>
    
  </div>
)
}
export default Comments
