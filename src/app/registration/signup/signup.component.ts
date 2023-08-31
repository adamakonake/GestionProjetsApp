import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MemberService} from "../../member/service/member.service";
import {Member} from "../../model/Member";
import {MyErrorStateMatcher} from "../../utils/validators/ErrorStateMatcher";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  constructor(private formBuilder: FormBuilder, private router: Router, private memberService: MemberService) {}
  memberForm!: FormGroup;
  passwordHide = true;
  confirmPasswordHide = true;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    this.memberForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: this.emailFormControl,
      numTel: [null, [Validators.required, Validators.minLength(8)]],
      password: [null, [Validators.required, Validators.minLength(4)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(4)]]
    });
    /*const message = this.memberForm.valueChanges.subscribe(
      pipe(
        filter(
          "mot de passse incorrecte" => this.memberForm.get("password").value !== this.memberForm.get("confirmPassword").value)));
    console.log(message);*/
  }
  addMember() {
    let member: Member = {
      id: this.memberService.getNewId(),
      firstName: this.memberForm.value.firstName,
      lastName: this.memberForm.value.lastName,
      email: this.memberForm.value.email,
      numTel: this.memberForm.value.numTel,
      password: this.memberForm.value.password,
      imageUrl: this.memberService.getRandomImage()
    }
    this.memberService.insertData(member);

    this.router.navigateByUrl("");
  }
}
