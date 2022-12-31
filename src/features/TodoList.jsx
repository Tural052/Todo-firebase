import React, { useContext, useEffect } from 'react'
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { useSelector } from 'react-redux';
import { selectAllTodos, useDeleteTodoMutation } from './todoSlice';
import ContextApi from './../context'


const TodoList = () => {
    const allPost = useSelector(selectAllTodos);
    const [deleteTodo] = useDeleteTodoMutation()
    const {selectData,setSelectData} = useContext(ContextApi);
    const removeTodo = (todo) => {
        deleteTodo(todo)
        if(selectData && selectData.id === todo.id){
            console.log("aaa")
            setSelectData(null)
        }
    }
    const editTodoHandle = (paramsTitle, paramsContent, paramsID) => {
        // setSelectData({
        //     title: paramsTitle,
        //     content: paramsContent,
        // })
    }

    return (
        <div>
            {

                <ListGroup className={"mt-2"}>{
                    allPost.map((todo, id) => (
                        <ListGroupItem key={id}
                            className={"d-flex list-group-item justify-content-between align-items-center mt-3 "}
                            style={{ borderRadius: "5px" }}>
                            <span>
                                <p className={"mb-1 title"}>Title: <b>{todo.title}</b></p>
                                <p className={"mb-0 content"}>Content: <em>{todo.content}</em></p>
                            </span>
                            <span>
                                <span className={"pe-2"}>
                                    <Button color={"success"} outline
                                    onClick={e => editTodoHandle(todo.title,todo.content,todo.id)}
                                    >Edit</Button>
                                </span>

                                <Button color={"danger"} outline id={`${todo.id}`}
                                onClick={(e) => removeTodo(todo)}
                                >Remove</Button>
                            </span>
                        </ListGroupItem>
                    ))
                }
                </ListGroup>

            }
        </div>
    );

}

export default TodoList