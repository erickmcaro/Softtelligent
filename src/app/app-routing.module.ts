import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent }   from './modules/main/main.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { FeaturesComponent } from './shared/features/features.component';
import { AboutComponent } from './modules/about/about.component';
import { SearchComponent } from './modules/search/search.component';
import { SupportComponent } from './modules/support/support.component';
import { sidebarWidgetsComponent } from './shared/sidebarWidgets/sidebarWidgets.component';

export const AppRoutes: Routes = [{
   path: '',
   redirectTo: 'home',
   pathMatch: 'full',
   },{
      path: '',
      component: MainComponent,
      children: [
         {
            path: 'home',
            component: HomeComponent
         },{
            path: '',
            loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule)
         },{
            path: 'contact',
            component: ContactComponent
         },{
            path:'about',
            component:AboutComponent
         },{
            path:'search',
            component:SearchComponent
         },{
            path:'support',
            component:SupportComponent
         },
         { 
				path: 'about/:keyword',component: AboutComponent 
			}
      ]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
