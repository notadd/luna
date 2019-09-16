import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';
import { NzTableModule, NzDividerModule, NzButtonModule } from 'ng-zorro-antd';
import { STModule } from '@delon/abc';
import { DelonFormModule } from '@delon/form';
@NgModule({
    imports: [WelcomeRoutingModule, CommonModule, NzTableModule, NzDividerModule, STModule, NzButtonModule, DelonFormModule],
    declarations: [WelcomeComponent],
    exports: [WelcomeComponent]
})
export class WelcomeModule { }
