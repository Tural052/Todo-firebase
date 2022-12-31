import React, { useContext, useEffect, useState } from 'react'
import Context from './../context';
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useAddTodoMutation } from './todoSlice';




const AddTodo = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { selectData, setSelectData } = useContext(Context)
    const isDisabled = [title, content].every(Boolean);
    const isUpdateDisable = [title.trim(), content.trim()].every(Boolean) && selectData;
    const [addTodo] = useAddTodoMutation();
    const [updateTodoMutation] = useAddTodoMutation()
    useEffect(() => {
        if (selectData) {
            setTitle(selectData.title)
            setContent(selectData.content)
        } else {
            setTitle('')
            setContent('')
        }
    }, [selectData])

    const handleSubmit = (e) => {
        addTodo({
            title,
            content
        })
        setContent('')
        setTitle('')
        e.preventDefault()
    }

    const updateTodo = () => {
        let data = {
            id: selectData.id,
            title,
            content
        }
        updateTodoMutation(data)
        setSelectData(null)
    }


    return (
        <Form className="p-2" onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="title">Post Title</Label>
                <Input
                    name="title"
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="content">Post Title</Label>
                <Input
                    name="content"
                    type="text"
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </FormGroup>
            <Button block color="primary" disabled={!isDisabled}>
                Add Post
            </Button>
            <Button onClick={updateTodo} disabled={!isUpdateDisable}
                color={"success w-100 ml-2"}>Update</Button>
        </Form>
    )
}

export default AddTodo