import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';


import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloModule, Apollo } from 'apollo-angular';


registerLocaleData(zh);

import { AlainThemeModule } from '@delon/theme';
import { DelonABCModule, STModule } from '@delon/abc';
import { DelonFormModule } from '@delon/form';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        IconsProviderModule,
        NgZorroAntdModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        HttpLinkModule,
        ApolloModule,
        AlainThemeModule.forChild(),
        DelonABCModule,
        STModule,
        DelonFormModule.forRoot()
    ],
    providers: [{ provide: NZ_I18N, useValue: zh_CN }],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
    constructor(
        apollo: Apollo,
        httpLink: HttpLink
    ) {
        apollo.create({
            link: httpLink.create({ uri: 'http://localhost:3004/graphql' }),
            cache: new InMemoryCache()
        });
    }
}
