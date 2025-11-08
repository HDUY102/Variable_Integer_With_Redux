'use client'
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from "@/state/store";

export default function Home() {
  return (
    <div>
      <Provider store={store}><Counter/></Provider>
    </div>
  );
}
