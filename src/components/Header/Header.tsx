import { FC, useEffect, useState } from 'react';
import { FieldGroup } from '@consta/uikit/FieldGroup';
import { Button } from '@consta/uikit/Button';
import { TextField } from '@consta/uikit/TextField';
import { IconSearchStroked } from '@consta/icons/IconSearchStroked';
import { Text } from '@consta/uikit/Text';
import "./Header.scss"
import { useDebounce } from '../../app/hooks';
import { setFilter } from '../../store/slices/todoSlice/todoSlice';
import { useAppDispatch } from '../../store/store';



export const Header: FC = () => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState<string>("");
    const handleChange = ({ value }: { value: string | null}) => {value ? setValue(value): setValue("")}
    let debounced: string = ""
    debounced = useDebounce(value)
    useEffect(()=>{
        dispatch(setFilter(value))
    }, [debounced])
    return (
        <header>
            <Text size="xl">Список задач</Text>
            <FieldGroup size="s">
                <TextField className='search' placeholder="Поиск" value={value} onChange={handleChange} withClearButton={true}/>
                <Button label="Поиск" iconRight={IconSearchStroked} onlyIcon view='secondary'/>
            </FieldGroup>
        </header>
    )
};

