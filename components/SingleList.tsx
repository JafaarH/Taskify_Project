import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import "./input.css"

type Props = {
l: Todo,
list: Todo[],
setList: Dispatch<SetStateAction<Todo[]>>
}


const SingleList = ({l, list, setList}: Props) => {

const handleDone = (id: number) => {
  setList(list.map((l)=> (
    l.id === id ?{...l, isDone: !l.isDone} : {...l}
  )))
}

const handleDelete = (id: number) => {
  setList(list.filter((l) => (
    l.id !== id
  )))
}

const [edit, setEdit] = useState<boolean>(false)
const [editList, setEditList] = useState<string>(l.todo)

const handleEdit = (e:React.FormEvent, id: number, todo:string) => {
   e.preventDefault()
    
    setList(list.map((l) =>(
     l.id === id ? {...l, todo:editList} : {...l}
    )))
    setEdit(false)
};
const inputRef = useRef<HTMLInputElement>(null)

useEffect(() => {
  inputRef.current?.focus();
}, [edit]);

    return (
        <form className="single_element" onSubmit={(e) => handleEdit(e,l.id,l.todo)} >
          {
            edit ?(
              <input 
              ref={inputRef}
              className="final_dance"
              value={editList}
              onChange={(e) => setEditList(e.target.value)}
              />
            ):(
              l.isDone ?(
                <s className="single_element_text">{l.todo}</s>
              ):(
                <span className="single_element_text">{l.todo}</span>
              )
            )
          }


        
          <span className="icon" onClick={() =>{
          if (!edit && !l.isDone) {
            setEdit(!edit)
            } 
          }
          } >
          <AiFillEdit  />

          </span>
          <span className="icon">
          <AiFillDelete onClick={() => handleDelete(l.id)} />
          </span>
          <span className="icon">
            <MdDone onClick={() => handleDone(l.id)}/>
          </span>
        </form>
    )
}
export default SingleList;