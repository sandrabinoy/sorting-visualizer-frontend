import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BottomControlsComponent } from './bottom-controls/bottom-controls.component';
import { DisplayPatchComponent } from './display-patch/display-patch.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TopControlsComponent } from './top-controls/top-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomControlsComponent,
    DisplayPatchComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    TopControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
