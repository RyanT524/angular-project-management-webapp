import { Component, OnInit } from '@angular/core';
import { FullUser } from '../types/full-user';
import { DataService } from '../data.service';
import { Company } from '../types/company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-company',
  templateUrl: './select-company.component.html',
  styleUrls: ['./select-company.component.css'],
})
export class SelectCompanyComponent implements OnInit {
  companies: Company[] | undefined = undefined;
  companyNames: string[] | undefined = undefined;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.currentUser.subscribe((currentUser) => {
      this.companies = currentUser?.companies;
      this.companyNames = this.companies?.map((company) => company.name);
    });

    this.dataService.currentUser.subscribe((currentUser) => {
      // Check currentUser exists
      if (!currentUser) {
        this.router.navigateByUrl('/login');
        return;
      }
      // Only allow admins to select a company
      if (!currentUser.admin && this.companies) {
        this.dataService.updateCompanyId(this.companies[0].id);
        this.router.navigateByUrl('/announcements');
      }
    });
  }

  onSubmit(selection: string) {
    let newCompanyId = this.companies?.find(
      (company) => company.name === selection
    )?.id;
    this.dataService.updateCompanyId(newCompanyId);
    this.router.navigateByUrl('/announcements');
  }
}
