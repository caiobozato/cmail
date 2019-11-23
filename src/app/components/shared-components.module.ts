import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CmailFormFieldDirective } from './cmail-form-group/cmail-form-group.directive';
import { CmailFormGroupComponent } from './cmail-form-group/cmail-form-group.component';
import { CmailListItemComponent } from './cmailListItem/cmail-list-item.component';

@NgModule({
    declarations: [HeaderComponent, CmailFormFieldDirective, CmailFormGroupComponent, CmailListItemComponent],
    imports: [CommonModule, RouterModule],
    exports: [HeaderComponent, CmailFormFieldDirective, CmailFormGroupComponent, CmailListItemComponent]
})

export class SharedComponentModule { }
