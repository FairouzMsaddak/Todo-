import { ActionReducerMap,Action } from '@ngrx/store';
import * as TodosAction from './todo.actions';
import { Todo } from '../todo.model';


export interface TodoState
{
    datas : Todo[],
    loading: boolean,
    loaded : boolean ,
    error : any
}

const initialState = {
    datas : [],
    loading : false ,
    loaded :false ,
    error : null
}


export function  todosReducer (state : TodoState = initialState, action : TodosAction.TodosActionType) : TodoState
{
    switch (action.type) {
        case TodosAction.TODO_CREATE : 
        
            return {
                ...state,
                datas : [...state.datas, action.payload]

            }
        case TodosAction.FETCH_TODO : 
          return  {
              ...state,
              loading : true,

        }
        case TodosAction.FETCH_TODO_SUCCESS : 
         return {
             ...state ,
             loading :false , 
             loaded : true, 
             datas : action.payload, 
             error : null
         }
         case TodosAction.FETCH_TODO_ERROR : 
          return {
              ...state, 
              error:action.payload ,
              loading : false 
             

          }
        case TodosAction.TODO_DELETE : 
        
        return {
            ...state, 
            datas : state.datas.filter((v,i)=>i!==action.payload )
        }
        case TodosAction.TODO_TOGGLE : 
        return {
            ...state , 
            datas : state.datas.map((v,i)=> i=== action.payload ? {...v,done :!v.done} : v )
        } 
        default : return state ; 
    }
}

