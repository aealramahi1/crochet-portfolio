import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AboutComponent} from "./about/about.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";

const routes: Routes = [

  // localhost:4200/?? connects to ??Component
  {path: 'about', component: AboutComponent},
  {path: 'portfolio', component: PortfolioComponent},

  // Default route
  {path: '', redirectTo: '/portfolio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
