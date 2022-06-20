import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';

const routes: Routes = [];
const appRoutes = [
  { path: '/login', component: LoginComponent,  pathMatch: 'full' },
  { path:'/post', component:PostdetailsComponent, pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
