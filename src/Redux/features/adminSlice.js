/* eslint-disable no-empty-pattern */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../API/axiosInstance'


export const getblog = createAsyncThunk('main/mycreate-blog', async (data, { rejectWithValue }) => {
    try {
        let response = await axiosInstance.get('main/mycreate-blog')
        return response
    } catch (err) {
        console.log(err);
        return rejectWithValue(err.response.data)

    }
})

export const getInTouchHome = createAsyncThunk('main/get-in-touch-home', async (data, { rejectWithValue }) => {
    try {
        let response = await axiosInstance.get('main/get-in-touch-home')
        return response
    } catch (err) {
        return rejectWithValue(err.response.data)

    }
})

export const contactUs = createAsyncThunk('main/contact-us', async (data, { rejectWithValue }) => {
    try {
        let response = await axiosInstance.get('main/contact-us')
        return response
    } catch (err) {
        return rejectWithValue(err.response.data)

    }
})

export const getOnBoarding = createAsyncThunk('main/get-on-boarding', async (data, { rejectWithValue }) => {
    try {
        let response = await axiosInstance.get('main/get-onboarding')
        return response
    } catch (err) {
        return rejectWithValue(err.response.data)

    }
})

export const getStarted = createAsyncThunk('main/get-started', async (data, { rejectWithValue }) => {
    try {
        let response = await axiosInstance.get('main/get-started')
        return response
    } catch (err) {
        return rejectWithValue(err.response.data)

    }
})

export const Subscribe = createAsyncThunk('main/subscribe', async (data, { rejectWithValue }) => {
    try {
        let response = await axiosInstance.post('main/subscribe', data)
        return response
    } catch (err) {
        return rejectWithValue(err.response.data)

    }
})

export const Section1 = createAsyncThunk('main/section1', async (data, { rejectWithValue }) => {
    try {
        let response = await axiosInstance.get('main/section1', data)
        return response
    } catch (err) {
        return rejectWithValue(err.response.data)

    }
})

export const BasicSection2 = createAsyncThunk('main/section2', async (data, { rejectWithValue }) => {
    try {
        let response = await axiosInstance.get('main/section2', data)
        return response
    } catch (err) {
        return rejectWithValue(err.response.data)

    }
})

export const BasicSection3 = createAsyncThunk('main/section3', async (data, { rejectWithValue }) => {
    try {
        let response = await axiosInstance.get('main/section3', data)
        return response
    } catch (err) {
        return rejectWithValue(err.response.data)

    }
})

export const CustomersReviews = createAsyncThunk('main/customer-reviews', async (data, { rejectWithValue }) => {
    try {
        let response = await axiosInstance.get('main/customer-reviews', data)
        return response
    } catch (err) {
        return rejectWithValue(err.response.data)
    }
})

export const subscribeMail = createAsyncThunk('main/subscribe-mail', async (data, { rejectWithValue }) => {
    try {
        let response = await axiosInstance.get('main/subscribe', data)
        return response
    } catch (err) {
        return rejectWithValue(err.response.data)

    }
})



const adminSlice = createSlice({
    name: "udata",
    initialState: {
        blogs: [],
        getintouchhome: [],
        contacts: [],
        onboarding: [],
        getstarted: [],
        subscribed: [],
        subscribemail: [],
        section1: [],
        section2: [],
        section3: [],
        customerReviews: [],
        loading: false,
        error: false,
        message: " "
    },
    reducers: {
        getBlogs: (state, action) => {
            state.blogs = action.payload
        },
        getInTouchhome: (state, action) => {
            state.getintouchhome = action.payload
        },
        getContactUs: (state, action) => {
            state.contacts = action.payload
        },
        getOnboarding: (state, action) => (
            state.onboarding = action.payload
        ),
        getGetStarted: (state, action) => (
            state.getstarted = action.payload
        ),
        getSubscribe: (state, action) => (
            state.subscribed = action.payload
        ),
        getSection1: (state, action) => (
            state.section1 = action.payload
        ),
        getSection2: (state, action) => (
            state.section2 = action.payload
        ),
        getSection3: (state, action) => (
            state.section3 = action.payload
        ),
        getCustomerReviews: (state, action) => (
            state.customerReviews = action.payload
        ),
        getSubscribeMail: (state, action) => (
            state.subscribemail = action.payload
        )


    },
    extraReducers: (builder) => {
        builder
            .addCase(getblog.pending, (state) => {
                state.loading = true;
            })
            .addCase(getblog.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.blogs = action.payload.data.data;
                state.message = action.payload.data.message;
            })
            .addCase(getblog.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload?.message
            })
            .addCase(getInTouchHome.pending, (state) => {
                state.loading = true;
            })
            .addCase(getInTouchHome.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.getintouchhome = action.payload.data.data;
                state.message = action.payload.data.message;
            })
            .addCase(getInTouchHome.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload?.message
            })
            .addCase(contactUs.pending, (state) => {
                state.loading = true;
            }
            )
            .addCase(contactUs.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.contacts = action.payload.data.data;
                state.message = action.payload.data.message;
            })
            .addCase(contactUs.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload?.message
            })
            .addCase(getOnBoarding.pending, (state) => {
                state.loading = true;
            }
            )
            .addCase(getOnBoarding.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.onboarding = action.payload.data.data;
                state.message = action.payload.data.message;
            })
            .addCase(getOnBoarding.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload?.message
            })
            .addCase(getStarted.pending, (state) => {
                state.loading = true;
            }
            )
            .addCase(getStarted.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.getstarted = action.payload.data.data;
                state.message = action.payload.data.message;
            })
            .addCase(getStarted.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload?.message
            })
            .addCase(Subscribe.pending, (state) => {
                state.loading = true;
            }
            )
            .addCase(Subscribe.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.subscribed = action.payload.data.data;
                state.message = action.payload.data.message;
            }
            )
            .addCase(Subscribe.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload?.message
            }
            )
            .addCase(Section1.pending, (state) => {
                state.loading = true;
            }
            )
            .addCase(Section1.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.section1 = action.payload.data.data;
                state.message = action.payload.data.message;
            }
            )

            .addCase(Section1.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload?.message
            }
            )
            .addCase(BasicSection2.pending, (state) => {
                state.loading = true;
            }
            )
            .addCase(BasicSection2.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.section2 = action.payload.data.data;
                state.message = action.payload.data.message;
            }
            )
            .addCase(BasicSection2.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload?.message
            }
            )
            .addCase(BasicSection3.pending, (state) => {
                state.loading = true;
            }
            )
            .addCase(BasicSection3.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.section3 = action.payload.data.data;
                state.message = action.payload.data.message;
            }
            )
            .addCase(BasicSection3.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload?.message
            }
            )
            .addCase(CustomersReviews.pending, (state) => {
                state.loading = true;
            })
            .addCase(CustomersReviews.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.customerReviews = action.payload.data.data;
                state.message = action.payload.data.message;
            })
            .addCase(CustomersReviews.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload?.message
            })
            .addCase(subscribeMail.pending, (state) => {
                state.loading = true;
            })

            .addCase(subscribeMail.fulfilled, (state, action) => {
                state.loading = false;
                state.error = !action.payload;
                state.subscribemail = action.payload.data.data;
                state.message = action.payload.data.message;
            }
            )
            .addCase(subscribeMail.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload?.message

            })
    }
})

export const { getBlogs, getInTouchhome, getContactUs, getOnboarding, getGetStarted, getSubscribe, getSection1, getSection2, getSection3, getCustomerReviews, getSubscribeMail } = adminSlice.actions
export default adminSlice.reducer