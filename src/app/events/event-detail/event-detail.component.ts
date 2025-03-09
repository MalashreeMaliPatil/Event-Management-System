import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  event$!: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
     private router: Router,
     private location: Location
  ) {}

  ngOnInit() {
    // Get the event ID from the route parameters
    const eventId = +this.route.snapshot.paramMap.get('id')!;
    
    // Fetch the event details using the EventService
    this.event$ = this.eventService.getEventById(eventId);
  }
  public deleteEvent(id:any){
    this.eventService.deleteEvent(id).subscribe(() => {
      // After successful creation, navigate to the event list
      this.location.replaceState('/list');
      this.router.navigate(['/list'],{ replaceUrl: true });
    });
  }
}
