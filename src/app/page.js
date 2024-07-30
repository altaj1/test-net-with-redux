'use client'

import { decrement, increment, reset } from "@/lib/features/Counter/counterSlice";
import { add } from "@/lib/features/fetchData/fetchSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Home() {
  const dispatch = useDispatch();
  // const count = useSelector((state) => state.counter.value);
  const count = useSelector((state) => state)
  console.log(count.user)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>dispatch(add(data)))
    
  },[])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     this is main rout
     {/* <h1>Counter: {count}</h1> */}
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    
    </main>
  );
}
