import React from 'react';
import './App.css';
import { AppUi } from './AppUi';
import { TodoProvider } from '../TodoContext';
const defaulTodos =[];

/* const defaulTodos = [
  {text:'Lorem ipsum dolor sit amet, consectetur adipisicing .',completed:true},
  {text:'todo 2',completed:false},
  {text:'todo 3',completed:true},
  {text:'todo 4',completed:false}
]; */


function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
