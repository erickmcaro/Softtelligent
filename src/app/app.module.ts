import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SlickModule } from 'ngx-slick';
import { DirectivesModule } from './core/directive/directives.module';
import { AgmCoreModule } from '@agm/core';
/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Service */
import { ChkService } from './core/service/chk.service';

/* components */
import { AppComponent } from './app.component';
import { MainComponent }   from './modules/main/main.component';
import { HomeComponent } from './modules/home/home.component';
import { ContactComponent } from './modules/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/menu/menu.component';

import { MenuItems } from './core/menu/menu-items/menu-items';
import { MenuToggleModule } from './core/menu-toggle.module';
import { PageTitleService } from './core/page-title/page-title.service';
import { WidgetsModule } from './shared/widgets/widgets.module';
import { FeaturesComponent } from './shared/features/features.component';
import { AboutComponent } from './modules/about/about.component';
import { SearchComponent } from './modules/search/search.component';
import { SupportComponent } from './modules/support/support.component';
import { Footer2Component } from './shared/footer2/footer2.component';
import { sidebarWidgetsComponent } from './shared/sidebarWidgets/sidebarWidgets.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    WidgetsModule,
    MenuToggleModule,
    DirectivesModule,
    SlickModule.forRoot(),
    AgmCoreModule.forRoot({
       apiKey: 'AIzaSyD4y2luRxfM8Q8yKHSLdOOdNpkiilVhD9k'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
