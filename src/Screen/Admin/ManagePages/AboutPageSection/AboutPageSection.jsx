import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import '../ManagePages.css'
import CrouselSection from '../HomePageSections/CrouselSection/CrouselSection'
import HomeSection2 from '../HomePageSections/Section2/Section2'
import HomeSection3 from '../HomePageSections/Section3/Section3'
import AboutSection1 from './AboutSection1/AboutSection1'
import AboutSection2 from './AboutSection2/AboutSection2'
import CustomerRevies from './CustomerRevies/CustomerRevies'

function TabPanel (props) {
  const { children, value, index, ...other } = props

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

export default function AboutPageSection () {
  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <div className='admin-dashboard'>
        <div className='admin-tabs'>
          <Tabs
            value={value}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons='auto'
            aria-label='scrollable auto tabs example'
            textColor='inherit'
            sx={{
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
              borderRadius: '10px'
            }}
          >
            <Tab
              label='Section 1'
              sx={{
                color: '#FFFFFF',
                textTransform: 'none',
                width: '150px',
                backgroundColor: '#3B85D7'
              }}
              {...a11yProps(0)}
            />
            <Tab
              label='Section 2'
              sx={{
                color: '#FFFFFF',
                textTransform: 'none',
                width: '150px',
                backgroundColor: '#3B85D7'
              }}
              {...a11yProps(1)}
            />
            <Tab
              label='Section 3'
              sx={{
                color: '#FFFFFF',
                textTransform: 'none',
                width: '150px',
                backgroundColor: '#3B85D7'
              }}
              {...a11yProps(2)}
            />
          </Tabs>
        </div>
      </div>
      <TabPanel value={value} index={0}>
        <AboutSection1 />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AboutSection2 />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CustomerRevies />
      </TabPanel>
    </Box>
  )
}
