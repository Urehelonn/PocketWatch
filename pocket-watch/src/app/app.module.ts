import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { AchievementService } from './service/achievement-service.service';
import { ProcessBarComponent } from './process-bar/process-bar.component';
import { AchievementDetailComponent } from './achievement-detail/achievement-detail.component';
import { DesireDetailComponent } from './desire-detail/desire-detail.component';
import { CreateAchievementPageComponent } from './create-achievement-page/create-achievement-page.component';
import { CurrencyService } from './service/currency-service.service';
import { DesireService } from './service/desire-service.service';

const appRoutes: Routes = [
  { path: 'calendar', component: CalendarPageComponent },
  { path: 'record', component: RecordPageComponent },
  { path: 'adetail/:id', component: AchievementDetailComponent },
  { path: 'createa', component: CreateAchievementPageComponent },
  { path: '**', component: MainPageComponent },
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
    ConfirmationComponent,
    ProcessBarComponent,
    AchievementDetailComponent,
    DesireDetailComponent,
    CreateAchievementPageComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [AchievementService,
    CurrencyService,
    DesireService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
