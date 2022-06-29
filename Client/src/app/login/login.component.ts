import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/Models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  constructor(public UserSer:UserService ,private router:Router) { }
  userLogin:User=new User("Name",null,null,null,null);
  use:User=new User(null,null,null,null,null);
  u:User;
  login(){
    this.UserSer.login(this.use.Name,this.use.Password).subscribe(
      data=>{this.userLogin=data;
        this.u=this.userLogin;
this.u.Code.toString;
        sessionStorage.setItem("user",JSON.stringify(this.u))
        this.routToAllR();},
      err=>{
        if(err.status==409)alert("the password is worrng") ;
        if(err.status==404)this.register_404();}
    )
    }
     
  register_404(){
    this.router.navigate(['/register',this.use.Name]);
  
  }
  routToAllR(){
    this.router.navigateByUrl('/all-recipes');
  
  }

  ngOnInit(): void {
  }

}
