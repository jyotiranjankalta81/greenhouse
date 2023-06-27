import React from 'react'
import { useDispatch } from 'react-redux'
import { BasicSection2 } from '../../Redux/features/adminSlice'
import './WhyChoose.css'
import { useSelector } from 'react-redux'

const WhyChoose = () => {
  const { section2 } = useSelector(state => state.admin)
  const [row, setrow] = React.useState([])
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(BasicSection2())
  }, [])

  React.useEffect(() => {
    if (section2?.length !== 0) {
      var sectiondata = []
      var newArray = section2.filter(function (el) {
        return el.NAME == 'HOME_SECTION2'
      })
      if (newArray?.length !== 0) {
        newArray.forEach((data, index) => {
          sectiondata.push({
            id: index + 1,
            SE_ID: data.SE_ID,
            HEADING: data.HEADING,
            TITLE: data.TITLE,
            NAME: data.NAME,
            CONTENT: data.CONTENT
          })
        })
        setrow(sectiondata)
      }
    }
  }, [section2])

  return (
    <>
      {row.length !== 0 && (
        <div className='choose_container'>
          <div className='choose_main_container'>
            <div className='choose_left_container'>
              <img src='/Images/Home/whychooseusleft.png' alt='' />
            </div>
            <div className='choose_right_container'>
              <h1> {row[0].HEADING}</h1>
              <h2>{row[0].TITLE}</h2>
              <p>{row[0].CONTENT}</p>
              <button className='start_btn'>Get Started</button>
            </div>
            <div className='far_right_container'>
              <img src={row[0].IMAGE} crossOrigin='anonymous' alt='' />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default WhyChoose
