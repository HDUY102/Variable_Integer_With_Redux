'use client'
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from "@/store/store";
import { thunkStore } from "@/store/thunkStore";
import { sagaStore } from "@/store/sagaStore";
import { observableStore } from "@/store/observableStore";

export default function Home() {
  return (
    <div>
      <Provider store={observableStore}><Counter/></Provider>
    </div>
  );
}
