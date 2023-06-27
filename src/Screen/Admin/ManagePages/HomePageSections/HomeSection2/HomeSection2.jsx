import React from 'react'
import Section2 from '../Section2/Section2'
import { useDispatch, useSelector } from 'react-redux'
import { BasicSection2 } from '../../../../../Redux/features/adminSlice'

const HomeSection2 = () => {
  const dispatch = useDispatch()
  const { section2 } = useSelector(state => state.admin)
  const [row, setrow] = React.useState([])

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
            CONTENT: data.CONTENT,
            NAME: data.NAME
          })
        })
        setrow(sectiondata)
      }
    }
  }, [section2])
  let data = [{ link: '/section2', name: 'HOME_SECTION2' }]

  return <>{row.length !== 0 && <Section2 datas={data} rows={row} />}</>
}

export default HomeSection2
