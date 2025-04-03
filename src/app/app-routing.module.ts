import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './characterlist/characterlist.component';
import { CharacterDetailsComponent } from './characterdetails/characterdetails.component';

const routes: Routes = [
  { path: '', component: CharacterListComponent },
  { path: 'character/:id', component: CharacterDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
