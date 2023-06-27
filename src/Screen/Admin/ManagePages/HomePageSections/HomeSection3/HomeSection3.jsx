import React from 'react'
import Section3 from '../Section3/Section3'
import { useDispatch, useSelector } from 'react-redux'
import { BasicSection3 } from '../../../../../Redux/features/adminSlice'

let data = [{ link: '/section3', name: 'HOME_SECTION3' }]

const HomeSection3 = () => {
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
        return el.NAME == 'HOME_SECTION3'
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

  return <>{row.length !== 0 && <Section3 datas={data} rows={row} />}</>
}

export default HomeSection3
