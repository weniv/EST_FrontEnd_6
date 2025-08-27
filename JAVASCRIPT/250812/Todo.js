// Todo Class --> 일의 내용, 일의 상태. chageState 메서드
// TodoManager Class --> 할일의 목록을 관리합니다. 할일을 저장, 할일의 목록을 보여줌, 할일의 남은 갯수를 반환


class Todo {
    constructor(item, finished) {
        this.item = item;
        this.finished = finished;
    }

    chageState() {
        this.finished = !this.finished;
    }
}

class TodoManager {
    constructor() {
        this.todoList = [];
    }

    addItem(item, finished) {
        const todo = new Todo(item, finished);

        this.todoList.push(todo);
    }

    getItems() {
        return this.todoList;
    }

    getLeftTodoCount() {
        return this.todoList.reduce((total, current) => current.finished === false ? ++total : total, 0);
    }
}
