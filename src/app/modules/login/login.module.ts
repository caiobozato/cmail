import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { LoginRouting } from './login-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { SharedComponentModule } from 'src/app/components/shared-components.module';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        LoginRouting,
        HttpClientModule,
        FormsModule,
        SharedComponentModule
    ],
    providers: [
        LoginService
    ]
})

export class LoginModule { }
