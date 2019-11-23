import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { CadastroRouting } from './cadastro-routing.module';

@NgModule({
    declarations: [
        CadastroComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        SharedComponentModule,
        CadastroRouting
    ]
})

export class CadastroModule { }
