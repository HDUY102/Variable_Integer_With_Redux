import createSagaMiddleware, { SagaIterator } from "redux-saga"
import { delay, put, takeEvery } from "redux-saga/effects"
import { createStore, applyMiddleware, combineReducers } from 'redux';

const INCREMENT_REQUEST = 'counter/incrementRequest'
const INCREMENT = 'action/increment'
const DECREMENT = 'action/decrement'

interface InitialState{ value: number }

const counterSaga: InitialState = {value:0}

function counterReducer(state = counterSaga, action:{type: string, payload?: number}):InitialState{
    switch (action.type){
        case INCREMENT: return {value: state.value + 1}
        case DECREMENT: return {value: state.value - 1}
        default: return state
    }
}

function* incrementSaga(): SagaIterator{
    // yield delay(1000)
    yield put({ type: INCREMENT });
}

function* rootSaga(): SagaIterator{
    yield takeEvery(INCREMENT_REQUEST, incrementSaga)
}

const rootReducer = combineReducers({ counter: counterReducer })
const sagaMiddleware = createSagaMiddleware()

export const sagaStore = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga) // run saga

export const incrementRequest = () => ({ type: INCREMENT_REQUEST })
export const decrementRequest = () => ({ type: DECREMENT })

export type RootStateSaga = ReturnType<typeof rootReducer>
export type AppDispatchSaga = typeof sagaStore.dispatch