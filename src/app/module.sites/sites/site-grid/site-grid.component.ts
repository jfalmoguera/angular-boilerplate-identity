import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Site } from 'src/app/entities';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-site-grid',
  templateUrl: './site-grid.component.html',
  styleUrls: ['./site-grid.component.scss']
})
export class SiteGridComponent implements OnInit, OnChanges {
  // @Input() sites: Site[];

  @Input() set sites(value: Site[]) {
    this.dataSource.data = value;
  }

  @Output() rowClicked = new EventEmitter<Site>(false);

  constructor() { }
  dataSource: MatTableDataSource<Site> = new MatTableDataSource<Site>();


  displayedColumns: string[] = [
    'id',
    'name',
    'countryDescr',
    'language',
    'enable',
    'sessionExpiration'
  ];


  ngOnChanges(changes: SimpleChanges): void {

    // if (changes.sites) {
    //   this.dataSource.data = changes.sites.currentValue;
    // }
  }

  ngOnInit() {

  }

  rowSelected(row: Site) {
    this.rowClicked.emit(row);
  }

}
