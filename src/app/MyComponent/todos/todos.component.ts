import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

/**
 * This class represents the lazy loaded TodosComponent.
 */

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  localItem! : string | null;
  todos: Todo[];
  constructor(){
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos = [
      ];
        
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }

  }

  ngOnInit(): void {
  }

  deletTodo(todo: Todo){
    console.log(todo);
    const Index = this.todos.indexOf(todo);
    this.todos.splice(Index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }
}
