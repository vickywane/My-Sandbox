import React, { useState } from 'react';
import styled from 'styled-components'

const Card = styled.div`
    padding-top : 10px
    padding-bottom : 10px
    padding-left : 10px
    padding-right : 10px
`

const Todo = ({ todo, i }) => {
	return <Card>{todo.text}</Card>;
};

export default function todo() {
	const [todos, setTodo] = useState([
		{
			text: 'Default todo here.',
			completed: false,
		},
	]);

	return (
		<div>
			{todos.map((todo, i) => (
				<Todo key={i} index={i} todo={todo} />
			))}
		</div>
	);
}
