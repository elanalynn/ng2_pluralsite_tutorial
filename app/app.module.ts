import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { CreateEventComponent } from './events/create-event/create-event.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { Error404Component } from './errors/404.component'
import { EventsService } from './events/shared/events.service'
import { ToastrService } from './common/toastr.service'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'
import { EventsListResolver } from './events/events-list-resolver.service'

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
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventsListResolver
  ],
  bootstrap: [EventsAppComponent]
})

export class AppModule {}

function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
    window.confirm('You have not saved this event. Do you really want to cancel?')
  return true
}
