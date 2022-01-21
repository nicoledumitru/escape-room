import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myLabels = [{
    start: '2022-01-12',
    textColor: '#e1528f',
    title: '2 SPOTS'
  }];
  myInvalid = [{
    start: '2022-01-12T08:00',
    end: '2022-01-12T13:00'
  }, {
    start: '2022-01-12T15:00',
    end: '2022-01-12T17:00'
  }, {
    start: '2022-01-12T19:00',
    end: '2022-01-12T20:00'
  }];
}
