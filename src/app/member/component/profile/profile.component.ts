import {Component, Input, OnInit} from '@angular/core';
import {Member} from "../../../model/Member";
import {MemberService} from "../../service/member.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  @Input() currentUser!: Member | null;
  barProperties!: any

  constructor(private memberService: MemberService) {
  }
  ngOnInit() {
    this.currentUser = this.memberService.getCurrentUser();

    this.barProperties = {
      barType: 'radial', //or 'radial' for radial bar
      color: "#0e90d2",
      secondColor: "#D3D3D3",
      progress: 66, //between 0 to 100
      linear: {
        depth: 22,
        stripped: true,
        active: true,
        label: {
          enable: true,
          value: "Linear Bar",
          color: "#fff",
          fontSize: 15,
          showPercentage: true,
        }
      },
      radial: {
        depth: 3, //max 8
        size: 4,
        label: {
          enable: true,
          color: "#09608c",
        }
      }
    }
  }
}
