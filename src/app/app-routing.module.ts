import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import {HomePage} from './home/home.page';
import {EditProfilePage} from './edit-profile/edit-profile.page';
import {ViewProfilePage} from './view-profile/view-profile.page';

const routes: Routes = [
  {
    path: 'profile',
    component: HomePage,
  },
  {
    path: 'edit-profile',
    component: EditProfilePage,
  },
  {
    path: 'view-profile',
    component: ViewProfilePage,
  },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
