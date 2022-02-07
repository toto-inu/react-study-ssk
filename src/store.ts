import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@c/modules/counter'
import bookReducer from '@c/modules/book'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    book: bookReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
