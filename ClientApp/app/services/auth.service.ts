import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from '../components/app/app.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,

        // Import the module into the application, with configuration
        AuthModule.forRoot({
            domain: 'angular-on-azure.us.auth0.com',
            clientId: 'c2jBAzj13wudsiaMjy3AR8NtKfTv0IYX'
        }),
    ],

    bootstrap: [AppComponent]
})
export class AuthService  { }