import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { DelonChartModule } from '@delon/chart';
import { AvatarListModule } from '@delon/abc';


@NgModule({
    imports: [WelcomeRoutingModule, DelonChartModule, AvatarListModule],
    declarations: [WelcomeComponent],
    exports: [WelcomeComponent]
})
export class WelcomeModule { }
