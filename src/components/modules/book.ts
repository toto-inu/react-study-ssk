import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

export interface CounterState {
  value: any
  loading: boolean
  error: any
}

const initialState: CounterState = {
  value: 0,
  loading: false,
  error: ''
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    // reducers
    start: (state) => {
      state.loading = true
      state.error = null
      return state
    },
    success: (state, action) => {
      return { ...state, loading: false, error: null, value: action.payload }
    },
    failed: (state, action) => {
      state.loading = false
      state.error = action.payload
      return state
    }
  }
})

const client = axios.create({
  baseURL: 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404',
  params: {
    applicationId: process.env.REACT_APP_RAKUTEN_API_KEY
  }
})

const fetch = async (keyword: string) => {
  const result = await client.get('/', {
    params: {
      title: keyword
    }
  })
  return result
}

export const fetchFunction = (keyword: string) => async (dispatch: any) => {
  const { start, success, failed } = bookSlice.actions
  try {
    dispatch(start())
    dispatch(success(await fetch(keyword)))
  } catch (err) {
    dispatch(failed(err))
  }
}

// Action creators are generated for each case reducer function
export const { start, success, failed } = bookSlice.actions

export default bookSlice.reducer
