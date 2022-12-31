import React from "react";
import AddPosts from "./../features/AddTodo";
import { Row, Col } from "reactstrap"
import TodoList from "./../features/TodoList";


const Dashboard = () => {
    return (
        <Row>
            <Col xs="6">
                <AddPosts />
            </Col>
            <Col>
                <TodoList />
            </Col>
        </Row>
    )
}

export default Dashboard;