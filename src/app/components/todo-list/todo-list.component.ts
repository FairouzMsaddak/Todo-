import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../todo.model';
import { TodoService } from '../../todo.service';
import {select, Store } from '@ngrx/store'
import { State } from '../../store';
import {TODO_CREATE} from '../../store/todo.actions'
import * as todosAction from '../../store/todo.actions';
import { TodoState } from '../../store/todos.reducer';
import {map} from 'rxjs/operators'
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos$: Observable<Todo[]> = this.store.pipe(
    select('todos'),
    map ((todoState :TodoState)=> todoState.datas
    
    )
  );
  public message: string;
  ngOnInit (){
    this.store.dispatch(new todosAction.FetchTodo());
  }
  constructor(private todoService: TodoService,private store :Store<State>) {}
 
  public addTodo() {
    //this.todoService.addTodo({ message: this.message, done: false });
    this.store.dispatch( new todosAction.CreateTodo({ message: this.message, done: false }));
  }
 
  public toggleTodo(index: number) {
    //this.todoService.toggleTodo(index);
    this.store.dispatch(new todosAction.ToggleTodo(index))
  }
 
  public deleteTodo(index: number) {
    console.log(index);
    //this.todoService.deleteTodo(index);
    this.store.dispatch(new todosAction.DeleteTodo(index))
  }
 

}
