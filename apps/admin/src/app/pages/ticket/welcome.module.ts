import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';

import { NzTableModule, NzDividerModule, NzButtonModule, NzDrawerModule, NzModalModule } from 'ng-zorro-antd';
import { STModule, SVModule } from '@delon/abc';
import { DelonFormModule } from '@delon/form';

@NgModule({
    imports: [
        WelcomeRoutingModule, CommonModule,
        NzTableModule, NzDividerModule,
        STModule, NzButtonModule,
        DelonFormModule, NzDrawerModule,
        SVModule, NzModalModule
    ],
    declarations: [WelcomeComponent],
    exports: [WelcomeComponent]
})
export class WelcomeModule { }
