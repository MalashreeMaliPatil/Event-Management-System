import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {
 public eventForm!: FormGroup;
 public eventId:any;
 public name = '';
 public date = '';
 public description = '';
 public buttonLabel = ''

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    let listData  = []
    this.eventService.getEvents().subscribe((data) => {
     listData = data;
    this.activatedRoute.params.subscribe(params => {
      let findINdex = parseInt(params['id']) - 1
      if(!!params['id']){
       this.buttonLabel = 'Update event'
      }else{
         this.buttonLabel = 'Create event'
      }
      this.eventId = !!params['id'] ? params['id'] : String(data.length + 1);
      this.name = !!data[findINdex] && !!data[findINdex].name ? data[findINdex].name : ''
      this.date = !!data[findINdex] && !!data[findINdex].date ? data[findINdex].date : ''
      this.description = !!data[findINdex] && !!data[findINdex].description ? data[findINdex].description : ''
      this.eventForm = this.fb.group({
        id: [this.eventId],
        name: [this.name, Validators.required],
        date: [this.date, Validators.required],
        description: [this.description, Validators.required],
      });
    });
    });
  
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      if(this.buttonLabel === "Update event"){
        this.eventService.updateEvent(this.eventForm.value.id,this.eventForm.value).subscribe(() => {
          this.location.replaceState('/list');
          this.router.navigate(['/list'],{ replaceUrl: true });
        });
      }else{
      this.eventService.createEvent(this.eventForm.value).subscribe(() => {
        this.location.replaceState('/list');
        this.router.navigate(['/list'],{ replaceUrl: true });
      });
    }
    }
  }
}
