import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataTableComponent } from './data-table/data-table.component';
import { TaskInfoComponent } from './data-table/task-info/task-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '', component: HomeComponent },
  { path: 'task-list', component: DataTableComponent },
  { path: 'task-info', component: TaskInfoComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
