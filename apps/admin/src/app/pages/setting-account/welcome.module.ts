import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { NzFormModule, NzIconModule, NzInputModule, NzButtonModule } from 'ng-zorro-antd';

@NgModule({
    imports: [WelcomeRoutingModule, NzButtonModule, NzFormModule, NzIconModule, NzFormModule, NzInputModule],
    declarations: [WelcomeComponent],
    exports: [WelcomeComponent]
})
export class WelcomeModule { }
