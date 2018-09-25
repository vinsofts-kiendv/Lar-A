import { Component, OnInit } from '@angular/core';
import { TeamsService } from "./teams.service";
import { UsersService } from "../users/users.service";
import { CookieService } from "ngx-cookie-service";
import {  TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  dataAll;
  dataOne;
  dataAllUsers;
  selectedValue;
  base64textString;
  logo_name;
  modalRef: BsModalRef;
  constructor(
    private teamsService: TeamsService,
    private usersService: UsersService,
    private cookieService: CookieService,
    private modalService: BsModalService
  ) {
    this.getAll();
    this.getAllUsers();
  }

  ngOnInit() {
    }
  getAll() {
    this.teamsService.getTeams(this.cookieService.get('Token'))
    .subscribe(res => {
      this.dataAll = res;
    });
  }
  getAllUsers() {
    this.usersService.getAll(this.cookieService.get('Token'))
    .subscribe(res => this.dataAllUsers = res);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template,{ backdrop: 'static', keyboard: false });
  }
  createTeam(form) {
    this.teamsService.createTeam(this.cookieService.get('Token'), form.value)
    .subscribe(res => {
      console.log(res);
      this.getAll();
    });
  }
  getTeam(id) {
    //case 1:
    // this.teamsService.getTeam(this.cookieService.get('Token'), id)
    // .subscribe(res =>
    // {
    //   this.dataOne = res;
    //   this.selectedValue = this.dataOne.leader_id;
    //   this.logo_name = this.dataOne.logo;
    // });

    //case 2:
    this.dataOne = this.dataAll.filter(x => x.id === id);
    this.dataOne = this.dataOne[0];
    this.logo_name = this.dataOne.logo;
    this.selectedValue = this.dataOne.leader_id;
  }
  updateTeam(form, id) {
    this.teamsService.updateTeam(this.cookieService.get('Token'), form.value, id)
    .subscribe(res => {
      console.log(res);
      this.getAll();
    });
  }
  deleteTeam(id) {
    this.teamsService.deleteTeam(this.cookieService.get('Token'), id)
    .subscribe(res => {
      console.log(res);
      this.getAll();
    });
  }
  //handle logo
  handleReaderLoaded(readerEvent) {
    const binaryString = readerEvent.target.result;
    this.base64textString = btoa(binaryString);
    this.logo_name = 'data:image/jpeg;base64,' + btoa(binaryString);
  }
  onChange(event) {
    const files = event.target.files;
    const file = files[0];
    if (file && files) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }
}
