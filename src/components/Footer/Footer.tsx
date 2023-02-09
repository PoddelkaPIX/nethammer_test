import { FC, useState } from "react";
import { Select } from '@consta/uikit/Select';
import { Button } from '@consta/uikit/Button';
import "./Footer.scss"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { clearTodos, setLimit, setLoading } from "../../store/slices/todoSlice/todoSlice";


type Item = {
    label: string;
    id: number;
  };
  
  const items: Item[] = [
    {
      label: '10',
      id: 1,
    },
    {
      label: '20',
      id: 2,
    },
    {
      label: '30',
      id: 3,
    },
  ];

export const Footer: FC = () => {
  const [value, setValue] = useState<Item>(items[0]);
  const dispatch = useAppDispatch()
  let todos = useAppSelector((state)=> state.todos.list)
  let total = useAppSelector((state)=> state.todos.total)
  function handlerSelectLimit(value: Item | null){
    if (value){
      dispatch(clearTodos())
      setValue(value)
    }
  }

  return (
    <footer>
        <label>Показано {todos.length} из {total}</label>
        <Button className="show-more-todos-btn" label={"Показать ещё "+value.label} onlyIcon view='secondary' onClick={()=>{dispatch(setLoading()); dispatch(setLimit(Number(value.label)))}}/>
        <Select
            className="select-limit"
            labelPosition="left"
            label="Показывать по"
            items={items}
            value={value}
            onChange={({ value }) => handlerSelectLimit(value)}
        />
    </footer>
  )
};