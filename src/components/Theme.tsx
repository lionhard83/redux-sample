import { useDispatch, useSelector } from "react-redux"
import { toggle, setTheme } from "../redux/themeSlice";
import { State } from "../redux/store";


export const Theme = () => {
    
    const theme = useSelector((state: State) => state.theme.value);

    const dispatch = useDispatch();
   
    return <>
        {[1, 2, 3].map(n => <p>{n}</p>)}
        <span>Current Theme: {theme}</span>
        <button onClick={() => dispatch(setTheme('dark'))}>Set dark</button>
        <button onClick={() => dispatch(setTheme('light'))}>Set light</button>
        <button onClick={() => dispatch(toggle())}>Toggle</button>
    </>
}