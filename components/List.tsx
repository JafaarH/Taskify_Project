import { Dispatch, SetStateAction } from "react";
import { Todo } from "../model";
import SingleList from "./SingleList";

type props = {
    list: Todo[],
    setList: Dispatch<SetStateAction<Todo[]>>
}

const List = ({list, setList}: props) => {
    return (
        <div className="father_list">
            {list.map((l) => (
                <SingleList 
                key={l.id}
                l={l}
                list = {list}
                setList={setList}
                />
            ))}
        </div>
    )
}
 export default List;