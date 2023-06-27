import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import ReviewCrousel from './ReviewCrousel/ReviewCrousel'
import './CustomerReviews.css'
import { useSelector, useDispatch } from 'react-redux'
import { CustomersReviews } from '../../../Redux/features/adminSlice'
import { imageBacked } from '../../../API/axiosInstance'
import MultiCarousel from './ReviewCrousel/Multicrousel/MultiCrousel'

const CustomerReviews = () => {
  const { customerReviews } = useSelector(state => state.admin)
  const dispatch = useDispatch()
  const [row, setrow] = React.useState([])
  React.useEffect(() => {
    dispatch(CustomersReviews())
  }, [])

  React.useEffect(() => {
    if (customerReviews?.length !== 0) {
      const datas = []
      customerReviews.forEach((data, index) => {
        datas.push({
          id: index + 1,
          RE_ID: data.RE_ID,
          TITLE: data.DESIGNATION,
          CONTENT: data.CONTENT,
          NAME: data.NAME,
          IMAGE: imageBacked + data.IMAGE
        })
      })
      setrow(datas)
    }
  }, [customerReviews])

  function cardsSection (array) {
    for (let i = 0; i < array.length; i += 3) {
      array.slice(i, i + 3).map((data, index) => {
        return <ReviewCrousel key={index} {...data} />
      })
    }
  }

  return (
    <>
      {row.length !== 0 && row.length > 3 && (
        <div className='customer_reviews_contetn'>
          <div className='customer_review_main_container'>
            <h1>Customer Reviews</h1>
            <h5>What our customer say about Beklom</h5>
            <div className='WhatClientSays'>
              <MultiCarousel>
                {row.length !== 0 &&
                  row.length > 3 &&
                  row.map((data, index) => {
                    return <ReviewCrousel key={index} {...data} />
                  })}
              </MultiCarousel>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CustomerReviews
