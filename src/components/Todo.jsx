import { useSelector } from "react-redux"

export default function Todo() {
	const todos = useSelector((state) => state.todo.todos)
	return (<>
		<h3>Todo list App</h3>
		<ul>
			{todos.map((todo) => (
				<li key={todo.id}>{todo.task}</li>
			))}
		</ul>
	</>
	)
}