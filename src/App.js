import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import uuidv4 from 'uuid/dist/v4'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <div className="">
      <Container className="p-3">
        <Jumbotron>
          <h1 className="header">MakeList</h1>
        </Jumbotron>
        <Row>
          <Col>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <input ref={todoNameRef} type="text" />&#160;
            <Button onClick={handleAddTodo}>Add Todo</Button>&#160;
            <Button onClick={handleClearTodos}>Clear Complete</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <span>{todos.filter(todo => !todo.complete).length} left to do</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
