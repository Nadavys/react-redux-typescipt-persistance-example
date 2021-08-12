import { configureStore, ThunkAction, Action, createSlice } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/counter/todoSlice';
import timerReducer from '../features/counter/timerSlice';
import { loadState, saveState } from './ localStorage'
import {throttle} from 'lodash'

const persistedState = loadState();
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    timer: timerReducer,
  },
  preloadedState: persistedState
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}, 1000));