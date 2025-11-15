import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics, Epic } from 'redux-observable';
import { ofType } from 'redux-observable';
import { delay, map, Observable } from 'rxjs';

const INCREMENT_REQUEST = 'counter/incrementRequest'; 
const INCREMENT = 'counter/increment'; 
const DECREMENT = 'counter/decrement';

interface CounterState {
  value: number;
}
const initialState: CounterState = { value: 0 };

function counterReducer(state = initialState, action: { type: string; payload?: number }): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const incrementAsyncEpic: Epic = (action$) => 
  action$.pipe(
    ofType(INCREMENT_REQUEST),
    // delay(1000),
    map(() => ({ type: INCREMENT }))
  );

const rootEpic = combineEpics(incrementAsyncEpic);

const rootReducer = combineReducers({ counter: counterReducer });
const epicMiddleware = createEpicMiddleware();

export const observableStore = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export const incrementObservable = () => ({ type: INCREMENT_REQUEST });
export const decrementObservable = () => ({ type: DECREMENT });

export type RootStateObservable = ReturnType<typeof rootReducer>;