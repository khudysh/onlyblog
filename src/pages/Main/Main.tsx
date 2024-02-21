import { useAppDispatch, useAppSelector } from "../../hooks/hooksState"
import { decrement, increment, incrementAsync, incrementByAmount } from "../../store/countSlice"
import { Skeleton } from "antd"

function Main() {
  const dispatch = useAppDispatch()
  const { value, isLoading } = useAppSelector((state) => state.counter)

  console.log("Render main");

  return (
    <div>
      Main
      {!isLoading ?
        <>
          <h1>{value}</h1>
        </>
        : <Skeleton active />
      }

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(0))}>+10</button>
      <button onClick={() => dispatch(incrementAsync(10))}>Async +10</button>
    </div>
  )
}

export default Main