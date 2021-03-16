import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { FrameworkRoutingModule } from './framework/framework-routing.module';
//import { FrameworkComponent } from './framework/framework.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FrameworkRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
