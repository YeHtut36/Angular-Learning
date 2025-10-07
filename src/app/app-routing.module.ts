import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarRatingsComponent } from './components/Day3/star-ratings/star-ratings.component';
import { TopOfPageComponent } from './components/Day3/top-of-page/top-of-page.component';

const routes: Routes = [
  { path: 'star-ratings', component: StarRatingsComponent },
  { path: 'top-of-page', component: TopOfPageComponent },
  { path: '', redirectTo: '/star-ratings', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
