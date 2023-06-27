import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as api from "../../API/ApiEndPoint"
import { serverInstance } from '../../API/ServerInstance'

export const getComments = createAsyncThunk('comments/getComment', async ({ data }, { rejectWithValue }) => {
    try {
        let response = await api.getComment()
        return response.data

    } catch (err) {
        return rejectWithValue(err.response.data)


    }
})


export const onboardhome = createAsyncThunk('onboardhome/postonboardhome', async ({ formdata, toast }, { rejectWithValue }) => {
    try {
        let response = await serverInstance('main/get-onboard-home', 'POST', formdata)
        toast.success(response.data.message)
        return response.data
    } catch (err) {
        return rejectWithValue(err.response.data)
    }
})

export const contactDetails = createAsyncThunk('contact/postcontact', async ({ formdata, toast }, { rejectWithValue }) => {
    try {
        let response = await serverInstance('main/contact-us', 'POST', formdata);
        if (response.data.success === true) {
            toast.success(response.data.message)
        } else {
            toast.error(response.data.message)
        }
        return response.data
    }
    catch (err) {
        return rejectWithValue(err.response.data)
    }
})
export const getInTouch = createAsyncThunk('get-in-touch/post-get-in-touch', async ({ formData }, { rejectWithValue }) => {
    try {
        let response = await serverInstance('main/get-in-touch', 'POST', formData);
        // toast.success('Your message has been sent successfully')
        return response.data
        // console.log(response.data)
    } catch (err) {
        return rejectWithValue(err.response.data)
    }
})

export const postPartnerDetails = createAsyncThunk('partner-us/postpartner-us', async ({ data, toast }, { rejectWithValue }) => {
    try {
        let response = await api.postPartnerDetails(data);
        toast.success('Your message has been sent successfully')
        return response.data
    } catch (err) {
        return rejectWithValue(err.response.data)
    }
})

const commonSlice = createSlice({
    name: "blog",
    initialState: {
        comments: [],
        loading: false,
        error: false,
        message: " "
    },
    reducers: {
        getAllComments: (state, action) => {
            state.comments = action.payload
        },


    },
    extraReducers: (builder) => {
        builder
            .addCase(getComments.pending, (state) => {
                state.loading = true;
            })
            .addCase(getComments.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.message = action.payload.message
                state.comments = action.payload;
            })
            .addCase(getComments.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload.message
            })
            .addCase(postPartnerDetails.pending, (state) => {
                state.loading = true;
            })
            .addCase(postPartnerDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.message = action.payload.message
            })
            .addCase(postPartnerDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload.message
            })
            .addCase(onboardhome.pending, (state) => {
                state.loading = true;
            })
            .addCase(onboardhome.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.message = action.payload.message
            })
            .addCase(onboardhome.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload.message
            })
            .addCase(contactDetails.pending, (state) => {
                state.loading = true;
            }
            )
            .addCase(contactDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.message = action.payload.message
            })
            .addCase(contactDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload.message
            })
            .addCase(getInTouch.pending, (state) => {
                state.loading = true;
            })
            .addCase(getInTouch.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.message = action.payload.message
            })
            .addCase(getInTouch.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload.message
            })


    }
})

export const { getAllBlog, getAllComments } = commonSlice.actions
export default commonSlice.reducer