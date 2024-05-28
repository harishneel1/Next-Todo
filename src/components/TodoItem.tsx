import React from 'react'

type TodoItemProps = {
    id: string
    title: string
    isComplete: boolean
}

const TodoItem = ({ id, title, isComplete }: TodoItemProps) => {
  return (
    <li className='flex gap-1 items-center'>
        <input id={id} type="checkbox" className='cursor-pointer peer'/>
        <label htmlFor={id} className='peer-checked:line-through'>{title}</label> 
    </li>
  )
}

export default TodoItem