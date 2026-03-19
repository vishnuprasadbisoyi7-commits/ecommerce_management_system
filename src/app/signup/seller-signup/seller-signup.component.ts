import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SellerSignupService } from '../../services/seller-signup.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Signup } from '../../models/dataTypes';

@Component({
  selector: 'app-seller-signup',
  standalone: false,
  templateUrl: './seller-signup.component.html',
  styleUrl: './seller-signup.component.css'
})
export class SellerSignupComponent implements OnInit{

  public signupMsg: string = ''
  private redirectUrl: string | null = null

  constructor(private signupService: SellerSignupService, private router: Router, private route: ActivatedRoute){}

  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    this.signupService.reloadSeller()
    this.redirectUrl = this.route.snapshot.queryParamMap.get('redirectUrl')
  }
  
  onSignup(){
    let userData = this.signupForm.value as Signup
    this.signupService.signupUser(userData).subscribe((res)=>{
      // console.log(res);
      if(res){
        this.signupMsg = `You Have Successfully Signed Up, Please Login`
        this.signupForm.reset()
      }
    }, (err)=>{
      // console.warn(err.error.message);
      this.signupMsg = err.error.msg
      this.signupForm.reset()
    })
    
  }

  onLogin(){
    let userData = this.loginForm.value as Signup
    const redirect = this.redirectUrl && this.redirectUrl.startsWith('/seller') ? this.redirectUrl : undefined
    this.signupService.loginUser(userData, redirect)
    this.signupService.signupMsg.subscribe((res)=>{
      if(res){
        // console.log(res);
        this.signupMsg = "Please Enter Valid Credentails"
        this.loginForm.reset()
      }
    })
  }
}
