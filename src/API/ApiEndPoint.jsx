import { axiosInstance, axiosInstances } from '../Axios/axiosInstance'

export const getBlog = () => axiosInstances.get('/blogs')
export const getComment = () => axiosInstances.get('/comments')

export const postContactDetails = data =>
  axiosInstance.post('main/contact-us', data)

export const postPartnerDetails = data =>
  axiosInstance.post('main/partner-us', data)
