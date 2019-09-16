import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
    NzTableModule, NzDividerModule, NzInputModule, NzStatisticModule,
    NzGridModule, NzFormModule, NzButtonModule, NzTimePickerModule, NzDatePickerModule
} from 'ng-zorro-antd';

@NgModule({
    imports: [
        WelcomeRoutingModule, NzTableModule,
        NzInputModule, NzDividerModule, NzFormModule,
        NzGridModule, ReactiveFormsModule,
        CommonModule, NzStatisticModule, NzButtonModule,
        NzTimePickerModule, NzDatePickerModule
    ],
    declarations: [WelcomeComponent],
    exports: [WelcomeComponent]
})
export class WelcomeModule { }
