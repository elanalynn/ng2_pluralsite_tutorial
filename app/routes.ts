import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { CreateEventComponent } from './events/create-event/create-event.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'
import { Error404Component } from './error/404.component'

export const appRoutes:Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: 'events', pathMatch: 'full' }
]
