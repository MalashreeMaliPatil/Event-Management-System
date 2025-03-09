import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'date', 'description', 'actions'];
  dataSource = new MatTableDataSource<any>([]);
  events :any = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe((data) => {
      // this.events = data;
      this.dataSource.data = data;
    });
  }
}
