import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import './OurTeam.css'
import Teamdata from '../../../JSONCollection/Teamdata'
import { Avatar } from '@mui/material'

const OurTeam = () => {
  const [selected, setSelected] = React.useState(null)
  const toggle = i => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  return (
    <>
      <div className='our_team_container'>
        <h1>Our Team</h1>
        <div className='our_team_main_container'>
          <div className='left_container_our_team'>
            <div className='accordion'>
              {Teamdata.map((item, i) => (
                <div className='item_team'>
                  <div className='title_team' onClick={() => toggle(i)}>
                    <Avatar /> &nbsp;&nbsp;
                    <h6 className='core_team_heading'>
                      {item.Name} &nbsp; <span>{item.Position}</span>{' '}
                    </h6>
                    <span>
                      {selected === i ? (
                        <ExpandLessIcon
                          sx={{ transform: ' scale(1)', color: '#FFFFFF' }}
                        />
                      ) : (
                        <ExpandMoreIcon
                          sx={{ transform: ' scale(1)', color: '#FFFFFF' }}
                        />
                      )}
                    </span>
                  </div>
                  <div
                    className={selected === i ? 'content_show_team' : 'content'}
                  >
                    {item.Describation}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='right_container_our_team'>
            <img src='/Images/About/ourteam.png' alt='' />
          </div>
        </div>
      </div>
    </>
  )
}

export default OurTeam
