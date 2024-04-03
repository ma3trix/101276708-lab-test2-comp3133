import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MissionListComponent } from './components/missionlist/missionlist.component';
import { MissionfilterComponent } from './components/missionfilter/missionfilter.component';
import { MissiondetailsComponent } from './components/missiondetails/missiondetails.component';
import { SpaceXService } from './services/space-x.service';

@NgModule({
  declarations: [
    AppComponent,
    MissionListComponent,
    MissionfilterComponent,
    MissiondetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SpaceXService],
  bootstrap: [AppComponent]
})
export class AppModule { }
