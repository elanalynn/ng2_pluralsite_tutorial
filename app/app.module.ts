import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HTTPModule } from '@angular/http'

import { EventsAppComponent } from './events-app.component'

import {
  EventsService,
  VoterService,
  EventsListComponent,
  EventThumbnailComponent,
  CreateEventComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventsListResolver,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  LocationValidator,
  DurationPipe
} from './events/index'

import { 
  TOASTR_TOKEN, 
  Toastr,
  JQ_TOKEN,
  CollapsableWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index'

import { NavBarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'

import { appRoutes } from './routes'

declare let toastr:Toastr
declare let jQuery:Object

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,,
    HTTPModule,
    ReactiveFormsModule
  ],
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
    DurationPipe
  ],
  providers: [
    EventsService,
    VoterService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventRouteActivator,
    EventsListResolver,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})

export class AppModule {}

function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
    window.confirm('You have not saved this event. Do you really want to cancel?')
  return true
}
