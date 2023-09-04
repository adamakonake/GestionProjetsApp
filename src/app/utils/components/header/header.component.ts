import {Component, Input, OnInit} from '@angular/core';
import {Member} from "../../../model/Member";
import {MemberService} from "../../../member/service/member.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Input() currentUser!: Member | null|undefined;
  constructor(private memberService: MemberService) {
  }

  ngOnInit() {
    this.currentUser = this.memberService.getCurrentUser();
  }
}
