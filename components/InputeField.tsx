import { Dispatch, SetStateAction, useRef } from "react"
import "./input.css"

type props = {
    todo: string,
    setTodo: Dispatch<SetStateAction<string>>,
    handleClick(e: React.FormEvent) : void 
}

const InputField = ({todo, setTodo, handleClick}: props) => {
    const inputRef = useRef<HTMLInputElement>(null)

    return (
    <form className="father">
        <input 
        ref = {inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Enter your task" 
        className="input_task" />
        <button className="bttn" 
        onClick={(e) => {
            handleClick(e)
            inputRef.current?.blur()
            }}>
            Go
        </button>
    </form>
)
}
export default InputField