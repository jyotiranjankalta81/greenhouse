import React from 'react'
import IndustryData from '../../../JSONCollection/Industry'
import './Industry.css'

const Industry = () => {
  return (
    <>
      <div className='serve_insustry'>
        <h1>Industry We Serve</h1>
        <div className='industry_cards'>
          {IndustryData.map(value => (
            <div className={`industry_card-${value.color}`}>
              <img src={value.image} alt='' />
              <h4 className='industry_heading'>{value.heading}</h4>
              <p className='industry_para'>{value.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Industry
