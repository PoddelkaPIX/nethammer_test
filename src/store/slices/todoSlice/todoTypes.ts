export type ITodo = {
    "id": number,
    "todo": string,
    "completed": boolean,
    "userId": number
}

export type ITodoList = {
    "todos": ITodo[]
    "total": number,
    "skip": number,
    "limit": number
}