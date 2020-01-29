import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IdValue, Site } from 'src/app/entities';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-site-filter',
  templateUrl: './site-filter.component.html',
  styleUrls: ['./site-filter.component.scss']
})
export class SiteFilterComponent implements OnInit {

  @Input() countries: IdValue[] = [];
  @Output() searchClicked = new EventEmitter<Site>(false);

  filterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filterForm = fb.group({
      name: [''],
      countryId: [''],
      enable: ['']
    });

  }

  ngOnInit() {
  }

  searchSites(filter: Site) {
    this.searchClicked.emit(filter);
  }

}
