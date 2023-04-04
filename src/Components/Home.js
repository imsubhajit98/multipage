// components/Home.js

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { FetchUsers } from '../Redux/actions'
import { useNavigate } from 'react-router-dom'

import './style.css';

function Home({ postsData, FetchUsers }) {
  useEffect(() => {
    FetchUsers();
  }, [FetchUsers])

  const navigate = useNavigate();
  const navigation = (post) => {
    navigate(`/item/${post.id}`, { state: { post } })
  }


  return postsData.loading ? (
    <h1>Loading...</h1>
  ) : postsData.error ? (
    <h1>Data Not Found</h1>
  ) : (
    <div className="homePage">
      <h1 className='homeTitle' > Social Media App</h1>
      <hr/>
      <div className="cardsDiv">

        {
          postsData && postsData.map((post, index) => (
            <div className='card' key={index} onClick={() => navigation(post)}>
              <div className="cardImage">
                <img src={`https://picsum.photos/200?random=${post.id}`} alt="" className="imgsrc" />
              </div>
              <div className="cardInfo">
               
                <p className="cardid">User ID: {post.userId}</p>
                <h4 className="cardtitle">Title: {post.title.slice(0, 15) + "..."}</h4>
                <h4 className="carddescription">Body: {post.body.slice(0, 25)}</h4>
                <h4 className='readMore'>Read More...</h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    postsData: state.post.posts
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    FetchUsers: () => dispatch(FetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home) 