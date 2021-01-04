
import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
export interface MyRouterState {
    url : string; 
    params : Params; 
    queryParams :Params;
    }

    export class MyRouterStateSerialiser implements RouterStateSerializer<MyRouterState> {
    serialize(routerState : RouterStateSnapshot):MyRouterState {
        const {url} =routerState;
        const {queryParams}= routerState.root ; 
        let state :ActivatedRouteSnapshot= routerState.root; 
        while (state.firstChild)
        { 
            state = state.firstChild
        }

        const {params} = state ; 

        return {url,params,queryParams}

    }

    }