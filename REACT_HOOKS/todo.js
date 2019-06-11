import React, { useState } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

// Styling for this component here --------------
const Card = styled.div`
    padding-top : 10px
    padding-bottom : 10px
    padding-left : 10px
    padding-right : 10px
    background: linear-gradient(to right, #eee, #000);
    color  : white
`;

const Button = styled.div`
background: #1B1B1B;
text-align: center
border-radius: 4px;
color: white;
margin: 0 1em;
height: 30px;
width: 12%;
padding: 0.25em 1em;
margin-top: 30px;
padding-top: 15px;
font-size: 1em;
&:hover {
    color: black;
border: 1px solid #1B1B1B;
background: white;
    cursor: pointer;
}
`;
const Remove = styled.div`
background: red;
text-align: center
border-radius: 4px;
color: white;
margin: 0 1em;
height: 15px;
width: 5%;
padding: 0.25em 1em;
margin-top: 20px;
margin-left: 40px;
padding-top: 5px;
font-size: 0.7em;
&:hover {
    color: black;
border: 1px solid #1B1B1B;
background: white;
    cursor: pointer;
}
`;
const style = {
	height: '50px',
	marginTop: '10px',
	paddingLeft: '10px',
	paddingTop: '15px',
	borderRadius: '3px',
	borderWidth: '0.5px',
	width: '350px',
	borderColor: '#1B1B1B',
};

// Styling ends here --------------

const Todo = ({ todo, i, removeTodo }) => {
	return (
		<Card>
			<Flex justifyCenter>
				<h4 style={{ paddingRight: '10px' }}>{todo.no} </h4> <p style={{ paddingTop: '5px' }}> {todo.text} </p>
				<Remove onClick={() => removeTodo(i)}> Remove </Remove>
			</Flex>{' '}
			<hr />
		</Card>
	);
};

// Todo input component
const InputForm = ({ addTodo }) => {
	const [value, addValue] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		if (!value) return;
		addTodo(value);
		addValue('');
	};

	// this func runs an increment operator to give each todo a number
	const _add = n => {
		return n + 1;
	};
	return (
		<Card>
			<Flex justifyCenter>
				<form onSubmit={handleSubmit}>
					<textarea
						type="text"
						name="message"
						placeholder={'Add a todo'}
						style={style}
						onChange={e => addValue(e.target.value)}
					/>
				</form>

				<Button onClick={handleSubmit}> Submit </Button>
			</Flex>
		</Card>
	);
};

// Main todo form
export default function todo() {
	const [todos, setTodo] = useState([
		{
			no: ' - ',
			text: 'Default todo here.',
			completed: false,
		},
	]);
	console.log(todos);
	// this func runs an increment operator to give each todo a number

	const addTodo = text => {
		const newTodos = [...todos, { text }];
		setTodo(newTodos);
	};

	const removeTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodo(newTodos);
	};

	return (
		<div style={{ backgroundColor: 'black' }}>
			<InputForm addTodo={addTodo} removeTodo={removeTodo} />

			<div>
				{todos.map((todo, i, { no }) => (
					<Todo key={i} index={i} todo={todo} no={no} removeTodo={removeTodo} />
				))}
			</div>
		</div>
	);
}
