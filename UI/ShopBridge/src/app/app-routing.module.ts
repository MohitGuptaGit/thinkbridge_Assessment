import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemcomponentComponent} from './itemcomponent/itemcomponent.component';

const routes: Routes = [
  {path:'item',component:ItemcomponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
