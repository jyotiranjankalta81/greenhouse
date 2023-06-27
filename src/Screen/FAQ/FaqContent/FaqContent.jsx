import * as React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import FaqData from '../../../JSONCollection/faqdata'
import './FaqContent.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { useSelector } from 'react-redux'

const rows = [
  {
    HEADING:
      'How many books would you say are in your house right now that your have no intention of reading (or even picking up) in the foreseeable future?',
    CONTENT: [
      'If you’re like most people it’s A LOT more than you think',
      'We discovered that average household has between 50-200+ books that will never be read or even opened.',
      'Thats the equivalent of 1-2 fully stuffed trash bins of books taking up unnecessary space in your home.',
      'We founded Used Book Haven as a hassle free book removal service for anyone looking for good home or good cause for their unused/unwanted books'
    ]
  },
  {
    HEADING: 'Our removal service is perfect for anyone who?',
    CONTENT: [
      'Wants to clean out or free up extra space in their home',
      'Doesn’t have the time/energy to clear out all your books yourself',
      'Wants to Get their unwanted books into the hands of people who actually want to read them',
      'Wants to save the planet and prevent perfectly books going into landfills'
    ]
  },
  {
    HEADING: 'check-out the list of Programs that your unwanted books benefit:',
    CONTENT: [
      'PrisonBookProgram.org',
      'Habitat for Humanity',
      'African Library Project',
      'Canines for Literacy',
      'Better World Books',
      'Goodwill',
      'Salvation Army'
    ]
  },
  {
    HEADING: 'What We Take?',
    CONTENT: [
      'We only take books that:',
      'in Acceptable/Good Condition,',
      'have an ISBN number/ or barcode',
      'Where to see if your book has an ISBN number:',
      'ISBNs were introduced to almost all books that were published/printed after 1970, if your book was published after 1970 it most likely will have an ISBN',
      'An ISBN can be found on the back cover of most books in either the form of a barcode, or sometimes it will just be printed back there',
      'If there is no ISBN there, you can almost always find the book’s ISBN in the first few pages normally printed on the page just before or after the title page',
      'There is a difference between SSNs and ISBNs, if a book has an SSN Or Library or Congress catalog number, it means the book is too old for us and we can not accept it'
    ]
  },
  {
    HEADING: 'What We Do Not Accept?',
    CONTENT: [
      'Any books with highlighting on the inside',
      'Any books where the covers/pages are partially ripped torn off',
      'Books with noticeable bends/ creases on the outside cover',
      'Books in Wet, Poor, or Rough conditions',
      'Books that smell of Mold, Mildew, or Smoke',
      'Books where the spine is falling apart/not in tact',
      'CDs',
      'DVDs',
      'VCR cassettes',
      'Vinyl Records',
      'Magazines',
      'Old Encyclopedias'
    ]
  },
  {
    HEADING: 'Our team is equipped to handle donations from:',
    CONTENT: [
      'Estate Sales',
      'Yard Sales',
      ' Moving Sales',
      ' Recycling/Liquidation companies',
      ' People looking to downsize',
      'Excess Church, Library, Thrift Store donations',
      'College students, Teachers, Schools, Universities looking to get rid of unwanted/outdated textbooks',
      'People looking to free up extra space in their home/appartment/garage/storage unit',
      `Used Book Haven is the ideal book removal service For anyone looking for a good home or good cause for their unused/unwanted books.${(
        <a href>Prison Book Program</a>
      )}`
    ]
  }
]

console.log('rows', rows)

const FaqContent = () => {
  const { section3 } = useSelector(state => state.admin)
  const [row, setrow] = React.useState([])

  React.useEffect(() => {
    if (section3?.length !== 0) {
      var sectiondata = []
      var newArray = section3.filter(function (el) {
        return el.NAME == 'FAQ_SECTION2'
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
  // console.log(row)
  React.useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  const [selected, setSelected] = React.useState(null)
  const toggle = i => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  return (
    <>
      {rows?.length !== 0 && (
        <div className='accordion'>
          <h2>Frequently Asked Question ?</h2>
          {rows.map((item, i) => (
            <div className='item' data-aos='fade-down'>
              <div className='title' onClick={() => toggle(i)}>
                <h6 className='title_heading'>{item.HEADING}</h6>
                <span>
                  {selected === i ? (
                    <ExpandLessIcon sx={{ transform: ' scale(1)' }} />
                  ) : (
                    <ExpandMoreIcon sx={{ transform: ' scale(1)' }} />
                  )}
                </span>
              </div>
              <div className={selected === i ? 'content show' : 'content'}>
                {/* item.CONTENT */}
                <ul className='details_answer'>
                  {item.CONTENT.map((items, i) => (
                    <li>{items}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default FaqContent
