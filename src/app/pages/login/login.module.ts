import { NgModule } from '@angular/core';
import { COMMON_IMPORTS } from '../../utils/common-imports';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { provideSocialLogin } from '../../config/social-login.config';
import { MyAuthService } from '../../services/my-auth.service';
@NgModule({
  imports: [
    COMMON_IMPORTS,
    SocialLoginModule,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
  ],
  providers: [
    MyAuthService,
    {
      provide: AuthServiceConfig,
      useFactory: provideSocialLogin,
    },
  ],
  declarations: [LoginComponent],
})
export class LoginModule { }
