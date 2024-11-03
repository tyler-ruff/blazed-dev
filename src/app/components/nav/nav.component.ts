import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth.service';
import firebase from 'firebase/compat/app';

import { site } from 'src/config/site';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public site = site;
  user: firebase.User | null = null;

  constructor(public authService: AuthService) { }

  login() {
    this.authService.loginWithGoogle().then((result) => {
      console.log('Logged in:', result);
    });
  }

  logout() {
    this.authService.logout().then(() => {
      console.log('Logged out');
    });
  }

  ngOnInit(): void {
    this.authService.isLoggedIn().subscribe(user => {
      this.user = user; // Set the user if logged in, else null
    });
  }

}
