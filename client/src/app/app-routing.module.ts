import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddreceipeComponent } from './components/addreceipe/addreceipe.component'
//This is my case 
const routes: Routes = [
    {
        path: '',
        component: AddreceipeComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }