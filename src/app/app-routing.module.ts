import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { PastSermonVideoComponent } from './past-sermon-video/past-sermon-video.component';
import { PastSermonAudioComponent } from './past-sermon-audio/past-sermon-audio.component';
import { DailyBibleReadingComponent } from './daily-bible-reading/daily-bible-reading.component';
import { MembersDashbordComponent } from './members-dashbord/members-dashbord.component';
import { ChurchCircuitComponent } from './church-circuit/church-circuit.component';
import { SateliteCommunityComponent } from './satelite-community/satelite-community.component';
import { PurchasedBooksComponent } from './purchased-books/purchased-books.component';
import { MinistriesComponent } from './ministries/ministries.component';
import { EventsComponent } from './events/events.component';
import { GiveComponent } from './give/give.component';
import { AboutTheChurchComponent } from './about-the-church/about-the-church.component';

import { HeaderHomepageComponent } from './header-homepage/header-homepage.component';
import { HeaderOthersComponent } from './header-others/header-others.component';
import { FooterMainComponent } from './footer-main/footer-main.component';
import { FooterSubComponent } from './footer-sub/footer-sub.component';


const routes: Routes = [
  { path : '', component : HomepageComponent},
  { path : 'pastSermonVideo', component : PastSermonVideoComponent},
  { path : 'pastSermonAudio', component : PastSermonAudioComponent},
  { path : 'dailyBibleReading', component : DailyBibleReadingComponent},
  { path : 'membersDashbord', component : MembersDashbordComponent},
  { path : 'churchCircuit', component : ChurchCircuitComponent},
  { path : 'sateliteCommunity', component : SateliteCommunityComponent},
  { path : 'purchasedBooks', component : PurchasedBooksComponent},
  { path : 'ministries', component : MinistriesComponent},
  { path : 'events', component : EventsComponent},
  { path : 'give', component : GiveComponent},
  { path : 'aboutTheChurch', component : AboutTheChurchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomepageComponent,
  PastSermonVideoComponent, PastSermonAudioComponent,
  DailyBibleReadingComponent, MembersDashbordComponent,
  ChurchCircuitComponent, SateliteCommunityComponent,
  PurchasedBooksComponent, MinistriesComponent,
  EventsComponent, GiveComponent, AboutTheChurchComponent,
  HeaderHomepageComponent, HeaderOthersComponent, FooterMainComponent,
  FooterSubComponent]
