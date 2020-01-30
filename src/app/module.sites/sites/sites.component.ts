import { Component, OnInit } from '@angular/core';
import { DataReferenceService } from '../services/data-reference.service';
import { IdValue, Site } from 'src/app/entities';
import { Observable } from 'rxjs';
import { SiteService } from '../services/site.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  // c: IdValue[];
  countries: Observable<Array<IdValue>> = this.dataReference.getContries();
  sitesList: Site[] = [];
  constructor(private dataReference: DataReferenceService,
    private router: Router,
    private siteModelService: SiteService) { }

  ngOnInit() {
    this.siteModelService.searchSites(null).subscribe(x => {
      this.sitesList = x;
    })
  }

  searchClicked(param: Site) {
    this.siteModelService.searchSites(param).subscribe(x => {
      this.sitesList = x;
    })
  }

  rowClicked(site: Site) {
    this.router.navigate(['sites/site-detail', site.id]);
  }

}

