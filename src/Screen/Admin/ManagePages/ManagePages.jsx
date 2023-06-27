import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import BlogsTable from '../Blogs/BlogsTable/BlogsTable'
import CreateBlogPost from '../Blogs/CreateBlogs/CreateBlogs'
import './ManagePages.css'
import HomePageTabs from './HomePageSections/HomePageTabs'
import AboutPageSection from './AboutPageSection/AboutPageSection'
import { useDispatch } from 'react-redux'
import {
  BasicSection2,
  BasicSection3,
  Section1
} from '../../../Redux/features/adminSlice'
import ServicePageSections from './ServicePageSection/ServicePageSections'
import FaqSections from './FaqPageSection/FaqSections'
import BlogPagesection1 from './BlogPageSection/BlogPageSection1/BlogPagesection1'
import BlogPageSections from './BlogPageSection/BlogPageSections'

function TabPanel (props) {
  const { children, value, index, ...other } = props
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(BasicSection2())
    dispatch(BasicSection3())
    dispatch(Section1())
  }, [])

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function ManagePages () {
  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    // <Box sx={{ width: '100%' }}>
    //   <div className='admin-dashboard'>
    //     <div className='admin-tabs'>
    //       <Tabs
    //         value={value}
    //         onChange={handleChange}
    //         variant='scrollable'
    //         scrollButtons='auto'
    //         aria-label='scrollable auto tabs example'
    //         textColor='inherit'
    //         sx={{
    //           fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
    //           display: 'flex',
    //           flexDirection: 'row',
    //           alignItems: 'center',
    //           gap: '2.4rem'
    //         }}
    //       >
    //         <Tab
    //           label='Home'
    //           sx={{
    //             color: '#FFFFFF',
    //             textTransform: 'none',
    //             fontWeight: 'bold',
    //             borderRadius: '10px',
    //             backgroundColor: '#3B85D7',
    //             border: '5px solid #FFFFFF'
    //           }}
    //           {...a11yProps(0)}
    //         />
    //         <Tab
    //           label='About Us'
    //           sx={{
    //             color: '#FFFFFF',
    //             textTransform: 'none',
    //             fontWeight: 'bold',
    //             borderRadius: '10px',
    //             backgroundColor: '#3B85D7',
    //             border: '5px solid #FFFFFF'
    //           }}
    //           {...a11yProps(1)}
    //         />
    //         <Tab
    //           label='Services'
    //           sx={{
    //             color: '#FFFFFF',
    //             textTransform: 'none',
    //             fontWeight: 'bold',
    //             borderRadius: '10px',
    //             backgroundColor: '#3B85D7',
    //             border: '5px solid #FFFFFF'
    //           }}
    //           {...a11yProps(2)}
    //         />
    //         <Tab
    //           label='FAQS'
    //           sx={{
    //             color: '#FFFFFF',
    //             textTransform: 'none',
    //             fontWeight: 'bold',
    //             borderRadius: '10px',
    //             backgroundColor: '#3B85D7',
    //             border: '5px solid #FFFFFF'
    //           }}
    //           {...a11yProps(3)}
    //         />
    //         <Tab
    //           label='Blogs'
    //           sx={{
    //             color: '#FFFFFF',
    //             textTransform: 'none',
    //             fontWeight: 'bold',
    //             borderRadius: '10px',
    //             backgroundColor: '#3B85D7',
    //             border: '5px solid #FFFFFF'
    //           }}
    //           {...a11yProps(4)}
    //         />
    //       </Tabs>
    //     </div>
    //   </div>
    //   <TabPanel value={value} index={0}>
    //     <HomePageTabs />
    //   </TabPanel>
    //   <TabPanel value={value} index={1}>
    //     <AboutPageSection />
    //   </TabPanel>
    //   <TabPanel value={value} index={2}>
    //     <ServicePageSections />
    //   </TabPanel>
    //   <TabPanel value={value} index={3}>
    //     <FaqSections />
    //   </TabPanel>
    //   <TabPanel value={value} index={4}>
    //     <BlogPageSections />
    //   </TabPanel>
    // </Box>
    <div className='design'>These section for future purpose</div>
  )
}
