export enum TodoStatus {
    'ALL_STATUSES' = 1,
    'ACTIVE' = 2,
    'COMPLETED' = 3,
    'CANCELED' = 4,
}

export class Todo {
    text: string;
    status: TodoStatus;
    static nextId = 0;

    id = ++Todo.nextId;

    constructor(text: string, status: TodoStatus = TodoStatus.ACTIVE) {
        this.text = text;
        this.status = status;
    }
}
