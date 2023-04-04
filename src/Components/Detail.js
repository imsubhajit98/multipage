import React from 'react'
import { useParams ,useLocation} from 'react-router-dom'

import './style1.css'

function Detail() {
  const {id} = useParams();
  const {post} = useLocation().state
  return (
    <div className='detailPage'>
     <h1 className='homeTitle' > Social Media App</h1>
     <hr/>
     <h1 className='headline'>Details Page For Post With ID: <span className='span'>{id}</span></h1>

      <div className="card_div">
        <img src={`https://picsum.photos/200?random=${id}`} alt='' className='imgsrc' />
        
        <h4 className='cardid'>UserId: <span className='span'>{post.userId}</span></h4>
        <h3 className='cardtitle'>Title: <span className='span'>{post.title}</span></h3>
        <h3 className='carddescription'>Body: <span className='span'>{post.body}</span></h3>
      </div>
    </div>
  )
}

export default Detail