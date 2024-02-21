import { useParams } from "react-router-dom"
import styles from './Profile.module.scss'
import { decrement, increment, incrementByAmount, incrementAsync } from "../store/counterSlice"
import { useAppSelector, useAppDispatch } from "../hooks/hooks"


function Profile() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const params = useParams<{ profileId: string }>()
  console.log(params)

  return (
    <div className={styles.profileDiv}>
      Profile {params.profileId}
      <p className={`${styles.P} ${styles.profileDiv__P}`}>HOHHOOH</p>
      <p>{count}</p>
      <button onClick={() => dispatch(incrementAsync(10))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
    </div>
  )
}

export default Profile