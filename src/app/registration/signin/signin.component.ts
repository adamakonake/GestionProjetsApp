import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private route: Router) {}
  memberConnectForm!: FormGroup;
  ngOnInit() {
    this.memberConnectForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required], Validators.minLength(4)],
    })
  }
  connectMember() {
    this.route.navigateByUrl("");
  }
}
