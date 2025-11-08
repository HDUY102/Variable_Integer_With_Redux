'use client'
import { decrement, increment } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
  const counterValue = useSelector((state:any) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-[500px_1fr_500px] grid-rows-4 mt-52">
      <h1 className="col-start-2 row-start-1 ">Ứng dụng Counter với Redux</h1>
      <span className="col-start-2 row-start-2">{counterValue}</span>
      <button className="col-start-2 row-start-3 bg-blue-400 hover:bg-blue-300" onClick={() => dispatch(increment())}>Increment</button>
      <button className="col-start-2 row-start-4 bg-red-400 hover:bg-red-300" onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
