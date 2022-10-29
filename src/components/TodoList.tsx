import { LegacyRef, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState, useAppDispatch } from "./store/Store"
import { addTodo, deleteTodo, IItem } from "./store/TodoSlice"
import {v4 as uuid} from 'uuid'


const TodoList = () => {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState<string>('')
    const listTodo = useSelector((state: RootState) => state.todo.listTodo)
    const [status, setStatus] = useState<string>('Todo')
    const inputRef = useRef(undefined)
    const addHandle = () => {
        const currentDate = new Date()
        const newTodo: IItem = {
            id: uuid(),
            todo: todo,
            createdAt: String(`${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`),
            status: status
        }
        dispatch(addTodo(newTodo))
    }
    const deleteHandle = (todoId: string) => {
        dispatch(deleteTodo(todoId))
    }
    return (
        <>
            <div style={{ width: '40%', margin: '0 auto' }}>
                <h1 style={{ textAlign: "center" }}>TODO APP</h1>
                <input type='text' placeholder="enter your todo"
                    style={{
                        width: '30%',
                        height: '30px',
                        border: 'none',
                        borderBottom: '2px solid #3399ff',
                        outline: 'none'
                    }}
                    onChange={e => setTodo(e.target.value)}
                   
                />
                <select value={status} onChange={e => setStatus(e.target.value)} style={{ width: '15%', height: '35px', marginLeft: '50px', background: '#3399ff', color: 'black', fontWeight: 'bold', outline: 'none', border: 'none', borderRadius: '5px', cursor:'pointer' }}>
                    <option value="Todo">Todo</option>
                    <option value="In progress">In progress</option>
                    <option value="Done">Done</option>
                </select>
                <button style={{ width: '15%', height: '35px', marginLeft: '50px', background: '#3399ff', color: 'white', fontWeight: 'bold', outline: 'none', border: 'none', borderRadius: '5px', cursor:'pointer' }}
                    onClick={addHandle}
                >Add</button>

                <div className="list-todo" style={{marginTop: '50px'}}>
                    {listTodo.map((d,idx) => {
                        return (
                            <div style={{display: 'flex', width:'100%', fontSize: '18px'}}>
                                <p key={idx} style={{width: '40%'}}><span>{d.todo}</span> | <span style={{color: '#ff0066'}}>{d.createdAt}</span> | <span style={{color: '#00e673'}}>{d.status}</span></p>
                                <button style={{width: '15%', height: '35px', marginLeft: '50px', background: '#ff0066', color: 'white', fontWeight: 'bold', outline: 'none', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px'}} onClick={() => deleteHandle(d.id)}>Delete</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default TodoList