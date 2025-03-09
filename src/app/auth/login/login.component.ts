import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { EventService } from 'src/app/events/event.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService,
     private router: Router,
     private location: Location,
    private eventService: EventService,) {
      localStorage.removeItem('authToken');
    }

  onLogin(): void {
    const user = { email: this.email, password: this.password };
    let enableLogin = false;
  
    this.eventService.getUsers().subscribe((data: any) => {
      let listData = data;
      for (let i = 0; i < listData.length; i++) {
        const element = listData[i];
  
        if (element.email == this.email) {
          if(element.password == this.password){
          enableLogin = true;
          this.authService.login(user).subscribe(
            (response) => {
              // If the login is successful, save the token (this is just an example, adjust to your needs)
              localStorage.setItem('authToken', 'fake-jwt-token');
              this.location.replaceState('/list');
              this.router.navigate(['/list'],{ replaceUrl: true });

            },
            (error) => {
              // Handle error (invalid credentials)
              this.errorMessage = 'Invalid credentials';
            }
          );
          break;  // Exit the loop once the correct credentials are found and login is triggered
        }else{
          this.errorMessage = 'invalid password'
          break;
        }
        }
        // else{
        //   this.errorMessage = 'User does not exist'
        //   break;
        // }
      }
  
      // Handle case when no matching user was found
      // if (!enableLogin) {
      //   this.errorMessage = 'Invalid credentials';
      // }
    });
  }
  onLinkClick(){
    // this.router.navigate(['/register']); 
  }
  
}
