import { ExperienceComponent } from './components/experience/experience.component';

import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
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
  component:SkillsComponent
  },
  {
  path:'education',
  component:EducationComponent
  },{
    path:'contact',
    component:ExperienceComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
