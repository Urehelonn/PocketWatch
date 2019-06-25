import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RecordPageComponent } from './record-page/record-page.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { ListBodyComponent } from './main-page/list-body/list-body.component';
import { CreateButtonsComponent } from './main-page/create-buttons/create-buttons.component';
import { AchievementListComponent } from './main-page/list-body/achievement-list/achievement-list.component';
import { IndividualAchievementComponent } from './main-page/list-body/achievement-list/individual-achievement/individual-achievement.component';
import { DesireListComponent } from './main-page/list-body/desire-list/desire-list.component';
import { IndividualDesireComponent } from './main-page/list-body/desire-list/individual-desire/individual-desire.component';
import { CreateAchievementComponent } from './main-page/create-buttons/create-achievement/create-achievement.component';
import { CreateDesireComponent } from './main-page/create-buttons/create-desire/create-desire.component';
import { SingleDayRecordComponent } from './record-page/single-day-record/single-day-record.component';
import { IndividualRecordComponent } from './record-page/single-day-record/individual-record/individual-record.component';
import { ConfirmationComponent } from './record-page/confirmation/confirmation.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path:'list', component: MainPageComponent },
  {path:'calendar', component: CalendarPageComponent},
  {path:'record', component: RecordPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    RecordPageComponent,
    CalendarPageComponent,
    ListBodyComponent,
    CreateButtonsComponent,
    AchievementListComponent,
    IndividualAchievementComponent,
    DesireListComponent,
    IndividualDesireComponent,
    CreateAchievementComponent,
    CreateDesireComponent,
    SingleDayRecordComponent,
    IndividualRecordComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
