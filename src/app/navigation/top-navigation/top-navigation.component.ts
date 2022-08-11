import { Token } from '@angular/compiler';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/AuthenticationService';

@Component({
  selector: 'top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.css']
})
export class TopNavigationComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  } 
  logout() {
    this.authenticationService.signout();
    this.router.navigate(['login']);
  }
}
