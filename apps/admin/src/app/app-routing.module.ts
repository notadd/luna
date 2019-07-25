import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/welcome' },
    { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
    { path: 'chongzhi', loadChildren: () => import('./pages/chongzhi/welcome.module').then(m => m.WelcomeModule) },
    { path: 'member', loadChildren: () => import('./pages/member/welcome.module').then(m => m.WelcomeModule) },
    { path: 'room', loadChildren: () => import('./pages/room/welcome.module').then(m => m.WelcomeModule) },
    { path: 'roomType', loadChildren: () => import('./pages/roomType/welcome.module').then(m => m.WelcomeModule) },
    { path: 'setting-rights', loadChildren: () => import('./pages/setting-rights/welcome.module').then(m => m.WelcomeModule) },
    { path: 'setting-account', loadChildren: () => import('./pages/setting-account/welcome.module').then(m => m.WelcomeModule) },
    { path: 'ticket', loadChildren: () => import('./pages/ticket/welcome.module').then(m => m.WelcomeModule) },
    { path: 'tixian', loadChildren: () => import('./pages/tixian/welcome.module').then(m => m.WelcomeModule) },
    { path: 'user', loadChildren: () => import('./pages/user/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
