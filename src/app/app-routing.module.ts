import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component'
import { DodajComponent } from './dodaj/dodaj.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,
  },
  {
    path:"home/:id",
    component:HomeComponent
  },
  {
    path:"dodaj",
    component:DodajComponent
  },
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"**",
    component:HomeComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}