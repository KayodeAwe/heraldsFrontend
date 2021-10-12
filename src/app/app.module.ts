import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { FrameworkRoutingModule } from './framework/framework-routing.module';
//import { FrameworkComponent } from './framework/framework.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { SquadCategoryService } from './services/squad-category.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth.guard';

import { TokenInterceptorService } from './token-interceptor.service';
import { RegistrationService } from './services/registration.service';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideoService } from './services/video.service';
import { SafePipe } from './safe.pipe';
import { AudioListComponent } from './audio-list/audio-list.component';
import { AudioDetailComponent } from './audio-detail/audio-detail.component';
import { AudioService } from './services/audio.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { VideoDetailsLatestComponent } from './video-details-latest/video-details-latest.component';
import { ChurchCircuitListComponent } from './church-circuit-list/church-circuit-list.component';
import { ChurchCircuitDetailsComponent } from './church-circuit-details/church-circuit-details.component';
import { CallForEnvangelismComponent } from './call-for-envangelism/call-for-envangelism.component';
import { DBibleComponent } from './d-bible/d-bible.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    VideoListComponent,
    VideoDetailComponent,
    SafePipe,
    AudioListComponent,
    AudioDetailComponent,
    VideoDetailsLatestComponent,
    ChurchCircuitListComponent,
    ChurchCircuitDetailsComponent,
    CallForEnvangelismComponent,
    DBibleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
    //FrameworkRoutingModule
  ],
  providers: [SquadCategoryService, AuthGuard, RegistrationService, VideoService, AudioService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
