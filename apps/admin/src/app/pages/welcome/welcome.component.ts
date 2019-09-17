import { Component, OnInit, HostBinding } from '@angular/core';
import * as format from 'date-fns/format';
@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    @HostBinding('class.d-block') block: boolean = true;

    chartData: any[] = [];
    visitData: any[] = [];

    constructor() { }

    ngOnInit() {
        for (let i = 0; i < 20; i += 1) {
            this.chartData.push({
                x: (new Date().getTime()) + (1000 * 60 * 30 * i),
                y1: Math.floor(Math.random() * 100) + 1000,
                y2: Math.floor(Math.random() * 100) + 10,
            });
        }

        const beginDay = new Date().getTime();
        for (let i = 0; i < 20; i += 1) {
            this.visitData.push({
                x: format(new Date(beginDay + (1000 * 60 * 60 * 24 * i)), 'YYYY-MM-DD'),
                y: Math.floor(Math.random() * 100) + 10,
            });
        }
    }

}
