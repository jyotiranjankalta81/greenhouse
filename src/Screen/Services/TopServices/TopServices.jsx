import React from 'react'
import './TopServices.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { imageBacked } from '../../../API/axiosInstance'

const TopServices = () => {
  const { section1 } = useSelector(state => state.admin)
  const [row, setrow] = React.useState([])
  React.useEffect(() => {
    if (section1?.length !== 0) {
      var sectiondata = []
      var newArray = section1.filter(function (el) {
        return el.NAME == 'SERVICE_SECTION1'
      })
      if (newArray?.length !== 0) {
        newArray.forEach((data, index) => {
          sectiondata.push({
            id: index + 1,
            SE_ID: data.SE_ID,
            IMAGE: imageBacked + data.IMAGE,
            TITLE: data.TITLE,
            CONTENT: data.CONTENT,
            NAME: data.NAME
          })
        })
        setrow(sectiondata)
      }
    }
  }, [section1])

  return (
    <>
      {row.length !== 0 && (
        <div className='intro_container'>
          <div className='mail_intro_container'>
            <div className='left_intro'>
              <h1>{row[0].TITLE}</h1>
              <p>{row[0].CONTENT}</p>

              <Link to='/getstarted' className='Link_btn'>
                <div className='get_started'>GET STARTED</div>
              </Link>
            </div>
            <div className='right_intro'>
              <img src={row[0].IMAGE} alt='' crossOrigin='anonymous' />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TopServices
