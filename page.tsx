"use client";
import Image, { StaticImageData } from 'next/image'
import './page.module.css'
import "./app.css"
import InputField from './components/InputeField'
import { useState } from 'react'
import { Todo } from './model';
import List from './components/List';

const Home = () => {
  const [todo, setTodo] = useState<string>("");
  const [list, setList] = useState<Todo[]>([]);

  const handleClick = (e: React.FormEvent) => {
   if(todo) {
    setList([...list, {id: Date.now(), todo, isDone: false }])
   }
    setTodo("");
    e.preventDefault();
  }
  
  
  return (
    <main className='app'>
      <span className="heading">Taskify</span>
       <InputField todo={todo} setTodo={setTodo} handleClick={handleClick} />
       <List list={list} setList={setList} />
    </main>
  )
}
export default Home;
