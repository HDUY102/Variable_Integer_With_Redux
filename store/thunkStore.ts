import { applyMiddleware, combineReducers, createStore, Dispatch } from "redux"
import { AnyAction } from "redux-saga"
import { thunk,ThunkDispatch, ThunkMiddleware } from "redux-thunk"

const INCREMENT = 'action/increment'
const DECREMENT = 'action/decrement'

interface InitialState { value: number }
const counterThunk: InitialState = {value: 0}

function counterReducer(state = counterThunk, action: {type: string, payload?: number}): InitialState{
    switch (action.type){
        case INCREMENT:
            return { value: state.value + 1 }
        case DECREMENT:
            return { value: state.value - 1 }
        default: return state
    }
}

const rootReducer = combineReducers({counter: counterReducer})

export const incrementThunk = () => (dispatch: Dispatch) => {
    // setTimeout(() => {
        dispatch({ type: INCREMENT})
    // }, 1000)
}

export const decrementThunk = () => (dispatch: Dispatch) => {
    dispatch({type: DECREMENT})
}
export const thunkStore = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateThunk = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<RootStateThunk, unknown, AnyAction>