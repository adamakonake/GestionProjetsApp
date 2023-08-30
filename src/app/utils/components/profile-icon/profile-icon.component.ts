import {Component, OnInit, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {Member} from "../../../model/Member";
import {MemberService} from "../../../member/service/member.service";

@Component({
  selector: 'app-profile-icon',
  templateUrl: './profile-icon.component.html',
  styleUrls: ['./profile-icon.component.css']
})
export class ProfileIconComponent implements OnInit{
  @Input() imageUrl!: string;
  @Input() name!: string;
  @Input() backgroundColor!: string;
  @Input() currentUser!: Member|null;

  constructor(private dialog: MatDialog, private memberService: MemberService) {
  }
  ngOnInit() {
    this.imageUrl = 'assets/1.jpg';
    this.backgroundColor = '#F2F6FE';
    this.currentUser = this.memberService.getCurrentUser();
  }

  logout() {
    this.dialog.open(DialogComponent, {
      data: {
        title: "Se deconnecter",
        textContent: "Voulez-vous vraiment vous deconnecté ?",
        textButton1: "Se deconnecter",
        textButton2: "Annuler",
      },
    });
  }
}
