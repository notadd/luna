import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { } from '@delon/abc';

@NgModule({
    imports: [WelcomeRoutingModule],
    declarations: [WelcomeComponent],
    exports: [WelcomeComponent]
})
export class WelcomeModule { }
