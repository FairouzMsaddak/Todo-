import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { FetchTodo, FetchTodoError, FetchTodoSuccess, FETCH_TODO } from './todo.actions';
import { switchMap,map, catchError } from 'rxjs/operators';
import { TodoService } from '../todo.service';

@Injectable()
export class TodosEffects {
    @Effect()
    public fetchTodo$ : Observable<Action> = this.actions$.pipe(
        ofType(FETCH_TODO),
        switchMap((fetchTodo :FetchTodo)=> 
        {return this.todoservice.getTodo()}),
        map(todos=> {return new FetchTodoSuccess(todos)}),
        catchError((err:any)=>{ return of( new FetchTodoError(err))})
        

    )
constructor (public actions$ :Actions, private todoservice: TodoService){
   
}
}