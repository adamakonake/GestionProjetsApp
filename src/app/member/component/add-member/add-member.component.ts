import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MemberService} from "../../service/member.service";
import {Member} from "../../../model/Member";
import {ProjetService} from "../../../project/services/projet.service";

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit{
  email: string = "";
  members : Member[] = [];

  constructor(private memberService: MemberService, private projectService: ProjetService) {}

  ngOnInit() {
    // @ts-ignore
    for (let i = 0; i < this.projectService.getCurrentProject()?.members.length; i++) {
      // @ts-ignore
      this.members.push(this.memberService.getMemberById(this.projectService.getCurrentProject()?.members[i]));
    }
  }

  inviteMember() {
    let newMember: Member | null | undefined = this.memberService.getMemberByEmail(this.email);
    if(newMember != undefined || newMember != null){
      this.projectService.addNewMember(newMember);
    }
  }

  removeMember(id: number) {
    const index = this.projectService.getCurrentProject()?.members.findIndex(memberId=> memberId == id);
    if (index !== -1) {
      let project = this.projectService.getCurrentProject();
      // @ts-ignore
      project.members.splice(index, 1);
      this.projectService.updateProject(project!);
      this.projectService.updateCurrentProject(project!);
    }
  }
}
