const main = (document => {
	function createElement(tag, props, ...children) {
		// body...
		const element = document.createElement(tag);

		Object.keys(props).forEach(key => element[key] = props[key]);

		if (children.lenth > 0) {
			children.forEach(child => {
				
				if (typeof child === 'string') {
					/*Создаем DOM узел из текста*/
					child = document.createTextNode(child);
				}

				element.appendChild(child);
			});
		}


		return element;
	}


	function createTodoItem(title) {
		// body...Создание DOM элемента

		const checkbox = createElement('input', {type: 'checkbox', className: 'checkbox'});

		const label = createElement('label', {className: 'title'}, title);

		const editInput = createElement('input', {type: 'text', className: 'textfield'});

		const editButton = createElement('button', {className: 'edit'}, 'Изменить');

		const deleteButton = createElement('button', {className: 'delete'}, 'Удалить');

		const listItem = createElement('li', {className: 'todo-item'}, 
								checkbox, label, editInput, editButton, deleteButton);


		bindEvents(listItem);

		return listItem;

	}


	function bindEvents(todoItem) {
		// body...
		const checkbox = todoItem.querySelector('.checkbox');
		const editButton = todoItem.querySelector('button.edit');
		const deleteButton = todoItem.querySelector('button.delete');

		checkbox.addEventListener('change', toggleTodoItem);
		editButton.addEventListener('click', editTodoItem);
		deleteButton.addEventListener('click', deleteTodoItem);

	}

	function addTodoItem(event) {
		/*Остановка отправки данных*/
		event.preventDefault();

		if (addInput.value === '') return alert('Необходимо ввести название задачи!');

		const todoItem = createTodoItem(addInput.value);
		todoList.appendChild(todoItem);
		addInput.value = '';

	}


	function toggleTodoItem() {
		const listItem = this.parentNode;
		listItem.classList.toggle('completed');
	}

	function editTodoItem() {
		// body...
		const listItem = this.parentNode;
		const title = listItem.querySelector('.title');
		const editInput = listItem.querySelector('.textfield');
		const isEditing = listItem.classList.contains('editing');

		if (isEditing) {
			title.innerText = editInput.value;
			this.innerText = 'Изменить';
		} else {
			editInput.value = title.innerText;
			this.innerText = 'Сохранить';
		}

		listItem.classList.toggle('editing');
	}

	function deleteTodoItem() {
		// body...
		const listItem = this.parentNode;
		todoList.removeChild(listItem);

	}


	// function load() {
	// 	// body...
	// 	const data = JSON.parse(localStorage.getItem('todos'));
	// 	return data;
	// }

	// function save(data) {
	// 	// body...
	// 	const string = JSON.stringify(data);
	// 	localStorage.setItem('todos', string);
	// }

	const todoForm = document.getElementById('todo-form');
	const addInput = document.getElementById('add-input');
	const todoList = document.getElementById('todo-list');
	const todoItems = document.querySelectorAll('.todo-item');
	// const date = [{id: 1, title: '', completed: false}, {}, {}];


	function main() {

		todoForm.addEventListener('submit', addTodoItem);
		todoItems.forEach(item => bindEvents(item));
	}


	return main;
})(document);


main();

