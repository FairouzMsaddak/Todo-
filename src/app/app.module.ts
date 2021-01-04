import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {reducers} from './store/index';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import {StoreModule} from "@ngrx/store"; 
import {StoreDevtoolsModule} from "@ngrx/store-devtools"; 
import {EffectsModule} from '@ngrx/effects'
import { TodosEffects } from './store/todo.effectes';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import {StoreRouterConnectingModule,RouterStateSerializer} from '@ngrx/router-store'
import { MyRouterStateSerialiser } from './store/router.helper';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    StoreRouterConnectingModule.forRoot(),
    AppRoutingModule,FormsModule,FlexLayoutModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({name:'to do'}),
    EffectsModule.forRoot([TodosEffects]),
    
  ],
  providers: [TodoService,{ provide: RouterStateSerializer,useClass :MyRouterStateSerialiser }],
  bootstrap: [AppComponent]
})
export class AppModule { }
