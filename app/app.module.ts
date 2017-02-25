import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import {
  EventsListComponent,
  EventThumbnailComponent,
  CreateEventComponent,
  EventDetailsComponent,
  EventsService,
  EventRouteActivator,
  EventsListResolver
} from './events/index'

import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'
import { ToastrService } from './common/toastr.service'
import { appRoutes } from './routes'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    NavBarComponent,
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    EventDetailsComponent,
    Error404Component
  ],
  providers: [
    EventsService,
    ToastrService,
    EventRouteActivator,
    EventsListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})

export class AppModule {}

function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
    window.confirm('You have not saved this event. Do you really want to cancel?')
  return true
}
