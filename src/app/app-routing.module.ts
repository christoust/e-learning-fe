import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseitemComponent } from './courseitem/courseitem.component';
import { AdminComponent } from './auth/admin/admin.component';
import { ForbiddenComponent } from './auth/forbidden/forbidden.component';
import { AuthGuard } from './_auth/auth.guard';
import { AddcourseComponent } from './addcourse/addcourse.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'home',component: HomeComponent},
  { path: 'search', component: CourseSearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'courses', component: CoursesComponent,canActivate:[AuthGuard], data:{roles:['User']}},
  { path: 'courses/:id', component: CourseitemComponent,canActivate:[AuthGuard], data:{roles:['User']}},
  { path: 'admin', component: AddcourseComponent,canActivate:[AuthGuard], data:{roles:['Admin']}},
  { path:'forbidden',component: ForbiddenComponent}
  
  // Add other routes for your components here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
