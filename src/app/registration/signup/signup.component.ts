import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MemberService} from "../../member/service/member.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  constructor(private formBuilder: FormBuilder, private router: Router, private memberService: MemberService) {}
  memberForm!: FormGroup;

  ngOnInit() {
    this.memberForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      numTel: [null, [Validators.required, Validators.minLength(8)]],
      password: [null, [Validators.required], Validators.minLength(4)],
      confirmPassword: [null, [Validators.required, Validators.minLength(4)]]
    })
  }
  addMember() {
    this.memberService.insertData(this.memberForm.value);

    this.router.navigateByUrl("");
  }
}
