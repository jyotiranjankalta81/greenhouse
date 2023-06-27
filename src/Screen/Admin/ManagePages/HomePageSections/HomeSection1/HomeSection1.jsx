import React from 'react'
import ManagePageTable from '../../ManagePageTable'
import CrouselSection from '../CrouselSection/CrouselSection'

let data = [{ link: '/section1', name: 'HOME_CROUSEL' }]

const HomeSection1 = () => {
  return (
    <>
      <CrouselSection datas={data} />
      <br />
      <ManagePageTable />
    </>
  )
}

export default HomeSection1
