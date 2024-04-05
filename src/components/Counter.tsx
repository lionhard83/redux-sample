import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/counterSlice";



export const Counter = () => {
    console.log("sto rirenderizzando counter?");
    const count = useSelector((state: any) => state.counter.value);
    const theme = useSelector((state: any) => state.theme.value);
    const dispatch = useDispatch()

    return <>
        
        <span>Theme: {theme}</span> <br /> 
        <span>Counter: {count}</span> <br /> 
        <button onClick={() => dispatch(increment())}>Increment</button>  
        <button onClick={() => dispatch(decrement())}>Decrement</button> 
        </>
}