import { Table, TableColumn, TableRow } from "@consta/uikit/Table"
import { FC, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {todoApi} from "../../store/slices/todoSlice/todoApi"
import { addTodos, setTotal } from "../../store/slices/todoSlice/todoSlice"
import { Text } from '@consta/uikit/Text';
import { ITodo } from "../../store/slices/todoSlice/todoTypes"
import "./Main.scss"
type Row = TableRow & {
    todo: string
    completed: string
  };


const columns: TableColumn<Row>[] = [
  {
    title: 'Номер',
    width: 70, 
    accessor: 'id',
    align: 'left',
    sortable: true,
  },
  {
    title: 'Задача',
    accessor: 'todo',
    align: 'center',
    sortable: true,
  },
  {
    width: 160,
    title: 'Статус',
    accessor: 'completed',
    align: 'left',
  },
];

export const Main: FC = () => {
    const dispatch = useAppDispatch()
    const [rows, setRows] = useState<Row[]>([])
    let todos = useAppSelector((state)=> state.todos.list)
    let limit = useAppSelector((state)=> state.todos.limit)
    let filter = useAppSelector((state)=> state.todos.filter)
    let total = useAppSelector((state)=> state.todos.total)
    let loading = useAppSelector((state)=> state.todos.loading)

    const {data} = todoApi.useGetTodosQuery({limit, skip: todos.length}, {
        skip: loading === false
    })
    
    // Обновление таблицы
    useEffect(()=>{
        let newRows: Row[] = []
        for (let todo of todos){
          if (todo.todo.toLowerCase().indexOf(filter.toLowerCase()) >= 0 ||  filter === ""){ // Фильтрация
            newRows.push({
              id: String(todo.id),
              todo: todo.todo,
              completed: todo.completed ? "🔵 Выполнено" : "🔴 Не выполнено"
            })
          }
        }
        setRows(newRows)
    }, [todos, filter])

    useEffect(()=>{
        if (data){
            let newTodos: ITodo[] = []
            for (let todo of data.todos){
                newTodos.push(todo)
            }
            dispatch(addTodos(newTodos))
            if (data.total !== total){
                dispatch(setTotal(data.total))
            }
        }
    }, [data])
  
    return (
        <main>
          <Table className="product-table" 
          rows={rows} 
          columns={columns} 
          stickyHeader={false}
          borderBetweenColumns 
          borderBetweenRows 
          emptyRowsPlaceholder={loading ? <Text>Загрузка...</Text> : <Text>Пусто</Text>}/>
        </main>  
    )
  }