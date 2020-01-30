import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataReferenceService } from '../services/data-reference.service';
import { SiteService } from '../services/site.service';
import { IdValue, Site } from 'src/app/entities';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.css']
})
export class SiteDetailComponent implements OnInit {

  id: any;
  countries: Observable<IdValue[]> = this.referenceDataService.getContries();
  theSite: Site = new Site();
  siteForm: FormGroup;

  constructor(route: ActivatedRoute,
    private router: Router,
    private siteModelService: SiteService,
    private referenceDataService: DataReferenceService,
    fb: FormBuilder) {

    this.siteForm = fb.group({
      name: ['', Validators.required],
      countryId: ['', Validators.required],
      enable: ['', Validators.required]
    });

    route.params.subscribe(params => {
      if (params.id) {
        this.id = params.id;
      }
    });
  }

  ngOnInit() {
    if (this.id) {
      this.siteModelService.getById(this.id).subscribe(x => {
        if (x) {
          this.theSite = x;
          this.loadData(x);
        }
      });
    }
  }

  save(site: Site) {
    this.siteModelService.save(site).subscribe(x => {
      if (x) {
        this.theSite = x;
        this.loadData(x);
      }
    });
  }

  newSite() {
    this.router.navigate(['sites/site-detail']);
    this.siteForm.reset();
  }

  private loadData(site: Site) {
    if (site) {
      this.siteForm.patchValue(site);
    }
  }
}
