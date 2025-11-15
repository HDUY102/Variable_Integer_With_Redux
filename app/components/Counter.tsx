'use client'
import { decrementObservable, incrementObservable, RootStateObservable } from "@/store/observableStore";
import { AppDispatchSaga, decrementRequest, incrementRequest, RootStateSaga } from "@/store/sagaStore";
import { decrement, increment } from "@/store/store";
import { AppDispatch, decrementThunk, incrementThunk, RootStateThunk } from "@/store/thunkStore";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const counterValue = useSelector((state:any) => state.counter.value); // redux toolkit + react redux
  const countThunk =  useSelector((state : RootStateThunk) => state.counter.value) // redux Thunk
  const countSaga = useSelector((state: RootStateSaga) => state.counter.value) // redux Saga
  const countObservable = useSelector((state: RootStateObservable) => state.counter.value) // redux Observable
  // const dispatch = useDispatch<AppDispatch>(); //redux thunk
  const dispatch = useDispatch(); //redux thunk
  return (
    <div className="grid grid-cols-[500px_1fr_500px] grid-rows-4 mt-52">
      <h1 className="col-start-2 row-start-1 ">Ứng dụng Counter với Redux</h1>
      <span className="col-start-2 row-start-2">{countObservable}</span>
      <button className="col-start-2 row-start-3 bg-blue-400 hover:bg-blue-300" onClick={() => dispatch(incrementObservable())}>Increment</button>
      <button className="col-start-2 row-start-4 bg-red-400 hover:bg-red-300" onClick={() => dispatch(decrementObservable())}>Decrement</button>
    </div>
  );
}
