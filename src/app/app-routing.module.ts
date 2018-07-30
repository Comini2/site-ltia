import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { TeamComponent } from './team/team.component';
import { AccessibilityComponent } from './accessibility/accessibility.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {state : ''}
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {state : ''}
  },
  {
    path: 'ltia-no-mundo',
    component: AboutComponent,
    data: {state : ''}
  },
  {
    path: 'location',
    component: LocationComponent,
    data: {state : ''}
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {state : ''}
  },
  {
    path: 'projects',
    component: ProjectComponent,
    data: {state : 'projects'}
  },
  {
    path: 'project/:id',
    component: ProjectInfoComponent,
    data: {state : 'project'}
  },
  {
    path: 'team',
    component: TeamComponent,
    data: {state : ''}
  },
  {
    path: 'accessibility',
    component: AccessibilityComponent,
    data: {state : ''}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
