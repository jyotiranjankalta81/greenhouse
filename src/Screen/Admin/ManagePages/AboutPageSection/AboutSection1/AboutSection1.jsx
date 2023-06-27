import React from 'react'
import HeaderSection from '../../HeaderSection/HeaderSection'
import { Section1 } from '../../../../../Redux/features/adminSlice'
import { useDispatch, useSelector } from 'react-redux'
import { imageBacked } from '../../../../../API/axiosInstance'

let data = [{ link: '/section1', name: 'ABOUT_SECTION1' }]
const AboutSection1 = () => {
  const dispatch = useDispatch()
  const { section1 } = useSelector(state => state.admin)
  const [row, setrow] = React.useState([])
  React.useEffect(() => {
    dispatch(Section1())
  }, [])
  React.useEffect(() => {
    if (section1?.length !== 0) {
      var sectiondata = []
      var newArray = section1.filter(function (el) {
        return el.NAME == 'ABOUT_SECTION1'
      })
      if (newArray?.length !== 0) {
        newArray.forEach((data, index) => {
          sectiondata.push({
            id: index + 1,
            SE_ID: data.SE_ID,
            TITLE: data.TITLE,
            CONTENT: data.CONTENT,
            NAME: data.NAME,
            IMAGE: data.IMAGE
          })
        })
        setrow(sectiondata)
      }
    }
  }, [section1])

  return <>{row.length !== 0 && <HeaderSection rows={row} />}</>
}

export default AboutSection1
