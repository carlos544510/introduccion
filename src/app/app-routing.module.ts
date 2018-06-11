import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {path: 'crud',component: UserCrudComponent},
  {path: 'users/:id/detail',component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
