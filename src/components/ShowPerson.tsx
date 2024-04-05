import { useSelector } from "react-redux"
import { State } from "../redux/store";



export const ShowPerson = () => {
    const person = useSelector((state: State) => state.person.value);
    return <>
        <span>{person.name}-{person.surname}</span>
    </>
}