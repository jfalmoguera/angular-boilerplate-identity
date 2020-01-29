import { Component, OnInit } from '@angular/core';
import { IdValue } from 'src/app/entities';

@Component({
  selector: 'app-site-filter',
  templateUrl: './site-filter.component.html',
  styleUrls: ['./site-filter.component.css']
})
export class SiteFilterComponent implements OnInit {

  countries: IdValue[] = [
    {
      id: 'es', value: 'España',
    },
    {
      id: 'fr', value: 'Francia',
    },
    {
      id: 'it', value: 'Italia',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
