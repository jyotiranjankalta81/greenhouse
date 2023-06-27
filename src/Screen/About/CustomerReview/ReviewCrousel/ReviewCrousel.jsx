import { Avatar } from '@mui/material'
import React from 'react'
import './ReviewCrousel.css'

const ReviewCrousel = props => {
  console.log(props)
  return (
    <>
      <div className='small_cards_container'>
        <div className='small_card'>
          <div className='review_header'>
            <img
              src={props.IMAGE}
              alt=''
              crossOrigin='anonymous'
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                zIndex: '1'
              }}
            />
            <p>
              {props.NAME} <span>{props.TITLE}</span>
            </p>
          </div>
          <p>{props.CONTENT}</p>
        </div>
      </div>
    </>
  )
}

export default ReviewCrousel
