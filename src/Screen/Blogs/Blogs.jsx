import React from 'react'
import './blogs.css'
// import BlogsData from '../../JSONCollection/blogs'
import BlogsCard from './BlogsCard/BlogsCard'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { useSelector } from 'react-redux'
import { getblog } from '../../Redux/features/adminSlice'
import { useDispatch } from 'react-redux'
import axiosInstance, { imageBacked } from '../../API/axiosInstance'

const Blogs = () => {
  const dispatch = useDispatch()
  const { blogs } = useSelector(state => state.admin)
  const [rows, setrow] = React.useState([])

  const { section1 } = useSelector(state => state.admin)
  const [row, setrows] = React.useState([])

  React.useEffect(() => {
    if (section1?.length !== 0) {
      var sectiondata = []
      var newArray = section1.filter(function (el) {
        return el.NAME == 'BLOG_SECTION1'
      })
      if (newArray?.length !== 0) {
        newArray.forEach((data, index) => {
          sectiondata.push({
            id: index + 1,
            SE_ID: data.SE_ID,
            IMAGE: imageBacked + data.IMAGE,
            TITLE: data.TITLE,
            CONTENT: data.CONTENT,
            NAME: data.NAME
          })
        })
        setrows(sectiondata)
      }
    }
  }, [section1])

  console.log(row)

  React.useEffect(() => {
    dispatch(getblog())
  }, [])

  React.useEffect(() => {
    if (blogs?.length !== 0) {
      const datas = []
      blogs.forEach((data, index) => {
        datas.push({
          id: index + 1,
          HEADING: data.HEADING,
          CONTENT: data.CONTENT,
          TAGS: data.TAGS,
          IMAGE: imageBacked + data.IMAGE
        })
      })
      setrow(datas)
    }
  }, [blogs])

  const [pageNumber, setPageNumber] = React.useState(0)

  const blogsPerPage = 6
  const pagesVisited = pageNumber * blogsPerPage

  const pageCount = Math.ceil(rows?.length / blogsPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  return (
    <>
      {row?.length !== 0 && (
        <div className='intro_container'>
          <div className='mail_intro_container'>
            <div className='left_intro'>
              <h1>{row[0].TITLE}</h1>
              <p>{row[0].CONTENT}</p>
              <Link to='/getstarted' className='Link_btn'>
                <div className='get_started'>GET STARTED</div>
              </Link>
            </div>
            <div className='right_intro'>
              <img src={row[0].IMAGE} crossOrigin='anonymous' alt='' />
            </div>
          </div>
        </div>
      )}
      <div className='blogs_container'>
        <div className='blogs_card_container'>
          {rows
            .slice(pagesVisited, pagesVisited + blogsPerPage)
            .map((BlogList, index) => (
              <BlogsCard key={index} {...BlogList} />
            ))}
        </div>
      </div>
      <div className='Blogs-Carousel-Track'>
        <ReactPaginate
          previousLabel={'Prev'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBttns'}
          previousLinkClassName={'previousBttn'}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
      </div>
      <br />
      <BlogSubscribe />
      <Footer />
    </>
  )
}

export default Blogs

function BlogSubscribe () {
  return (
    <div className='subscribe_blog'>
      <div className='subscribe'>
        <div className='subscribe_left_container'>
          <img src='/Images/Home/subscribeleft.png' alt='' />
        </div>
        <div className='subscribe_right_container'>
          <h1>STAY TUNED</h1>
          <p>
            Subscribe to our newsletter and never miss our Tech, latest news,
            etc.
          </p>
          <p>Our newsletter is sent once a week, every Monday</p>
          <div className='input_box'>
            <input type='email' placeholder='Subscribe' />
          </div>
        </div>
      </div>
    </div>
  )
}
