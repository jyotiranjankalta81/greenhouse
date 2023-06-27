import * as React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './CoreMember.css'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

const desc = `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
Necessitatibus nobis fuga provident quas temporibus sunt ab,
libero expedita dolor corrupti facilis, eum cum eos distinctio!
Praesentium est exercitationem vitae aut. Amet ipsa perferendis
velit vitae accusantium neque mollitia sed molestiae minus
eligendi ex nemo dignissimos, sapiente aliquid ut inventore eum
explicabo. Doloremque deleniti, laudantium sint cum quas explicabo
beatae corporis! Accusamus voluptas pariatur voluptatum deleniti,
qui tempore blanditiis est facilis consequatur ipsa explicabo
obcaecati non eveniet libero! Laboriosam iusto minima a harum
natus similique. Commodi voluptates harum unde nam nesciunt.
Voluptatibus illum placeat reiciendis.`

const descs = `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
Necessitatibus nobis fuga provident quas temporibus sunt ab,
libero expedita dolor corrupti facilis, eum cum eos distinctio!
Praesentium est exercitationem vitae aut. Amet ipsa perferendis
velit vitae accusantium neque mollitia sed molestiae minus
eligendi ex nemo dignissimos, sapiente aliquid ut inventore eum
explicabo. Doloremque deleniti, laudantium sint cum quas explicabo
beatae corporis! Accusamus voluptas pariatur voluptatum deleniti,
qui tempore blanditiis est facilis consequatur ipsa explicabo
obcaecati non eveniet libero! Laboriosam iusto minima a harum
natus similique. Commodi voluptates harum unde nam nesciunt.
Voluptatibus illum placeat reiciendis aliquam, ipsam officia sint
voluptate laborum, ducimus aspernatur cupiditate id, esse vitae
perspiciatis veritatis quam! Vitae voluptates dolor et ullam
dolorem ipsa ea accusamus omnis harum!`

const CoreMember = () => {
  const [more, setMore] = React.useState(false)
  const [more1, setMore1] = React.useState(false)
  // console.log('desc', desc)
  React.useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  // const width = window.innerWidth
  return (
    <>
      <div className='core_member_conatainer'>
        <br />
        <br />
        <br />
        <div className='core_member_sub_container' data-aos='fade-down-right'>
          <div className='sections_conre11'>
            <img src='/Images/About/about1.webp' alt='' />
          </div>
          <div className='sections_conre21'>
            <h2 className='about_content_heding'>About Horris Book</h2>
            <p className='about_sub_para_desktop'>{desc}</p>
            <p className='about_sub_mobile'>
              {more ? desc : desc.slice(0, 150)}
              <button className='read_more_btn' onClick={() => setMore(!more)}>
                {more ? 'Read Less ' : 'Read More'}
              </button>
            </p>
          </div>
        </div>
        <div className='core_member_sub_container' data-aos='fade-down-right'>
          <div className='sections_conre11'>
            <img src='/Images/About/about2.webp' alt='' />
          </div>
          <div className='sections_conre21'>
            <p className='about_sub_para_desktop'>{descs}</p>
            <p className='about_sub_mobile'>
              {more1 ? descs : descs.slice(0, 150)}
              <button
                className='read_more_btn'
                onClick={() => setMore1(!more1)}
              >
                {more1 ? 'Read Less ' : 'Read More'}
              </button>
            </p>
          </div>
        </div>
        <div className='visionandmission'>
          <h3 className='core_magement_heading'>Our Vision</h3>
          <div className='vision_container'>
            <div className='vision1' data-aos='fade-down'>
              <img src='/Images/Vision/values.jpg' alt='' />
              <p>Core Purpose</p>
              <p>" To Help Leading Enterprise "</p>
            </div>
            <div className='vision2' data-aos='fade-down'>
              <img src='/Images/Vision/vision.jpg' alt='' />
              <p>Core Values</p>
              <ul>
                <li>We Work with Passion</li>
                <li>We believe in Excellence</li>
                <li>We put Reader First</li>
              </ul>
            </div>
            <div className='vision3' data-aos='fade-down'>
              <img src='/Images/Vision/mission.jpg' alt='' />
              <p>Mount Everest Goal</p>
              <p>
                Used book Heaven to Serve 10,00,000 Books by 15’th August 2041
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoreMember
