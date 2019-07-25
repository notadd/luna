import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { NzFormModule, NzInputModule, NzButtonModule, NzUploadModule, NzIconModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule, WelcomeRoutingModule,
        NzIconModule, NzFormModule, NzInputModule,
        NzButtonModule, NzUploadModule
    ],
    declarations: [WelcomeComponent],
    exports: [WelcomeComponent]
})
export class WelcomeModule { }
