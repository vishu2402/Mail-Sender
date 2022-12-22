import { configureStore, combineReducers } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';
import userReducer from '../features/userSlice';

const reducer = combineReducers({
    mail: mailReducer,
    user: userReducer,
})

const store = configureStore({
    reducer
})

export default store