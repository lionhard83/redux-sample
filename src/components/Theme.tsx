import { useDispatch, useSelector } from "react-redux"
import { toggle } from "../redux/themeSlice";


export const Theme = () => {
    console.log("sto rirenderizzando theme?");
    const theme = useSelector((state: any) => state.theme.value);
    const dispatch = useDispatch();

    return <>
        <span>Current Theme: {theme}</span>
        <button onClick={() => dispatch(toggle())}>Toggle</button>
    </>
}