import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from './todo.model';

@Injectable()
export class TodoService {
  public todos$: BehaviorSubject<Todo[]> = new BehaviorSubject([
    {
      message: 'manger une pizza',
      done: false
    }
  ]);

  constructor() { }

  public getTodo ():Observable<Todo[]>
  {
      return timer(2000).pipe(map(()=>[{
        message: 'manger une pizza',
        done: false
      }]))
  }

}