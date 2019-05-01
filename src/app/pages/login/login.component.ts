import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { MyAuthService } from '../../services/my-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(
    private socialService: AuthService,
    private authService: MyAuthService,
    private router: Router
  ) {
  }

  public ngOnInit(): void {
  }

  public async loginWithGoogle(): Promise<void> {
    // await this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID);
    // this.socialService.authState.subscribe(user => {
    //   this.authService.googleLogin(user.idToken).subscribe();
    // })

    this.authService.googleLogin().subscribe(res => {
      console.log('1: ', res);
    })

    // this.router.('http://localhost:8080/api/auth/google').then(res => {
    //   console.log('1: ', res);
    // })

    // window.open('http://localhost:8080/api/auth/google', 'mywindow', 'location=1,status=1,scrollbars=1, width=800,height=800');
    // let listener = window.addEventListener('message', (message) => {
    //   console.log('MESSAGE: ', message);
    //   window.close();
    //   // message will contain facebook user and details
    // });
  }
}
