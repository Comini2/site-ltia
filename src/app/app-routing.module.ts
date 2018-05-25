import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'ltia-no-mundo',
    component: AboutComponent
  },
  {
    path: 'location',
    component: LocationComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {    
    path: 'project',
    component: ProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
