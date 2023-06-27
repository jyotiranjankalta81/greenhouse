import React from 'react'
import { BasicSection3 } from '../../../../../Redux/features/adminSlice'
import { useDispatch, useSelector } from 'react-redux'
import Section3 from '../../HomePageSections/Section3/Section3'

let data = [{ link: '/section2', name: 'ABOUT_SECTION2' }]

const AboutSection2 = () => {
  const dispatch = useDispatch()
  const { section3 } = useSelector(state => state.admin)

  const [row, setrow] = React.useState([])
  React.useEffect(() => {
    dispatch(BasicSection3())
  }, [])
  React.useEffect(() => {
    if (section3?.length !== 0) {
      var sectiondata = []
      var newArray = section3.filter(function (el) {
        return el.NAME == 'ABOUT_SECTION2'
      })
      if (newArray?.length !== 0) {
        newArray.forEach((data, index) => {
          sectiondata.push({
            id: index + 1,
            SE_ID: data.SE_ID,
            HEADING: data.HEADING,
            CONTENT: data.CONTENT,
            NAME: data.NAME
          })
        })
        setrow(sectiondata)
      }
    }
  }, [section3])

  console.log(row)

  return <>{row.length !== 0 && <Section3 datas={data} rows={row} />}</>
}

export default AboutSection2
