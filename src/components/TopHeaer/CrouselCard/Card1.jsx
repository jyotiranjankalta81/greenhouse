import React from 'react'
import { Link } from 'react-router-dom'
import './Card1.css'

const Card1 = props => {
  return (
    <>
      <div className='intro_container'>
        <div className='mail_intro_container'>
          <div className='left_intro'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <Link to='/getstarted' className='Link_btn'>
              <div className='get_started'>GET STARTED</div>
            </Link>
          </div>
          <div className='right_intro'>
            <img src={props.image} crossOrigin='anonymous' alt='' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Card1
