import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import apiSaga from '../apiSaga';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore ({
  reducer: rootReducer,
  middleware:()=>[sagaMiddleware]
})
sagaMiddleware.run(apiSaga)
export default Store 