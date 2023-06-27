import React from 'react'
import './Tech.css'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { BasicSection3 } from '../../Redux/features/adminSlice'
import { Link } from 'react-router-dom'

const Tech = () => {
  const { section3 } = useSelector(state => state.admin)
  const dispatch = useDispatch()
  const [row, setrow] = React.useState([])
  React.useEffect(() => {
    dispatch(BasicSection3())
  }, [])

  React.useEffect(() => {
    if (section3?.length !== 0) {
      var sectiondata = []
      var newArray = section3.filter(function (el) {
        return el.NAME == 'HOME_SECTION3'
      })

      if (newArray?.length !== 0) {
        newArray.forEach((data, index) => {
          sectiondata.push({
            id: index + 1,
            SE_ID: data.SE_ID,
            HEADING: data.HEADING,
            NAME: data.NAME,
            CONTENT: data.CONTENT
          })
        })
        setrow(sectiondata)
      }
    }
  }, [section3])

  return (
    <>
      {row.length !== 0 && (
        <div className='tech_container'>
          <div className='tech_main_container'>
            <div className='left_main_container'>
              <h2>{row[0].HEADING}</h2>
              <p>{row[0].CONTENT}</p>
              <div className='technology'>
                <div className='button_slide slide_right_services'>
                  Customer Services
                  <Link
                    to='/services'
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <ArrowCircleRightOutlinedIcon />
                  </Link>
                </div>
                <div className='button_slide slide_right_success'>
                  Customer Success
                  <Link
                    to='/services'
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <ArrowCircleRightOutlinedIcon />
                  </Link>
                </div>
                <div className='button_slide slide_right_workforce'>
                  Workforce Management Consultancy
                  <Link
                    to='/services'
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <ArrowCircleRightOutlinedIcon />
                  </Link>
                </div>
                <div className='button_slide slide_right_contact'>
                  Contact Center Consultancy
                  <Link
                    to='/services'
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <ArrowCircleRightOutlinedIcon />
                  </Link>
                </div>
                <div className='button_slide slide_right_Cyber'>
                  Cyber Security Consulting
                  <Link
                    to='/services'
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <ArrowCircleRightOutlinedIcon />
                  </Link>
                </div>
                <div className='button_slide slide_right_website'>
                  Website Developement
                  <Link
                    to='/services'
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <ArrowCircleRightOutlinedIcon />
                  </Link>
                </div>
              </div>
            </div>
            <div className='right_main_container'>
              <img src='/Images/Home/techimg.png' alt='' />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Tech
