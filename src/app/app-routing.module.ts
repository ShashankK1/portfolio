import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
  path:'home',
  component:HomeComponent
  },
  {
  path:'skills',
  component:HomeComponent
  },
  {
  path:'education',
  component:HomeComponent
  },
  {
  path:'experience',
  component:HomeComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
