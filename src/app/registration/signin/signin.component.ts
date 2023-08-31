import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MemberService} from "../../member/service/member.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private route: Router, private memberService: MemberService) {}
  memberConnectForm!: FormGroup;
  ngOnInit() {
    this.memberConnectForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(4)]]
    })
  }
  connectMember() {
    console.log(this.memberConnectForm.value);
    this.memberService.connectMember(this.memberConnectForm.value.email, this.memberConnectForm.value.password);
  }
}
