import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'search-page', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
