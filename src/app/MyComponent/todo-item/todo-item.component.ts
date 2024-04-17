import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import{Todo}from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor(){

  }
  ngOnInit(): void {
    
  }

  OndltClick(todo : Todo){
      this.todoDelete.emit(todo);
  
    console.log("delete button clicked"); 
  }
  
  OnCheckclick(todo :Todo){
    console.log("check button clicked"); 
    this.todoCheckbox.emit(todo);
  }
}
