import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',

})
export class UserComponent implements OnInit {
  fullname:string='';
  address:string='';
  creditCard:number=0
  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  submitForm():void{
    this.router.navigate(['/welcome']);
  }
}
