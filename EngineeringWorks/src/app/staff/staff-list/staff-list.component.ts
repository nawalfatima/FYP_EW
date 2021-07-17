import { IStaffInfo, IStaffPaged } from 'src/app/model/IStaff';
import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { StaffServiceService } from 'src/app/admin/admin-services/StaffService.service';
import { StaffInfo } from 'src/app/model/StaffInfo';
import { StaffPaged } from 'src/app/model/StaffPaged';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {
  contentArray :IStaffPaged;
  returnedArray: IStaffInfo[] = [new StaffInfo()] ;
  totalItems: number;
  currentPage : number;
  numOfPages : number;
  pageSize : number = 9;
  constructor(private staffService : StaffServiceService,
              private router : Router) {

    this.getItems();
   }

  ngOnInit(): void {
    this.pageSize = 5;
    this.currentPage =1;
    this.totalItems = 5;
  }
  getItems(pageNumber: number = 1){
    this.staffService.getAllStaff(pageNumber , this.pageSize)
    .subscribe((res: StaffPaged) => {
      this.returnedArray = res.data;
  this.totalItems= res.totalRecords;
  this.currentPage= res.pageNumber;
  this.numOfPages = (this.totalItems)/this.pageSize;
  console.log ( res );

      });

    };


  pageChanged(event: PageChangedEvent): void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
  }
  loadStaffForm(id: number){
    console.log("staff id is passed value =" + id);
this.router.navigate(['admin/manage-employee',id])

  }
}
