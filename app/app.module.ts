import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import './rxjs-extensions'

import { EventsAppComponent } from './events-app.component'

import {
  CreateEventComponent,
  CreateSessionComponent,
  DurationPipe,
  EventDetailsComponent,
  EventResolver,
  EventsListComponent,
  EventsListResolver,
  EventsService,
  EventThumbnailComponent,
  LocationValidator,
  SessionListComponent,
  UpvoteComponent,
  VoterService,
} from './events/index'

import {
  CollapsableWellComponent,
  IToastr,
  JQ_TOKEN,
  ModalTriggerDirective,
  SimpleModalComponent,
  TOASTR_TOKEN,
} from './common/index'

import { Error404Component } from './errors/404.component'
import { NavBarComponent } from './nav/navbar.component'
import { AuthService } from './user/auth.service'

import { appRoutes } from './routes'

declare let toastr: IToastr
declare let jQuery: Object

@NgModule({
  bootstrap: [EventsAppComponent],
  declarations: [
    NavBarComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    EventDetailsComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsableWellComponent,
    SimpleModalComponent,
    UpvoteComponent,
    ModalTriggerDirective,
    LocationValidator,
    DurationPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [
    EventsService,
    VoterService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventsListResolver,
    EventResolver,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],
})

export class AppModule {}

function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
      window.confirm('You have not saved this event. Do you really want to cancel?')
  }
  return true
}
