import { Component, AfterContentInit } from '@angular/core';
//tslint:disable
@Component({
    selector: 'test-component',
    template: 'Angular component which was downgraded and used in AngularJS...',
})
export class TestComponent implements AfterContentInit {
    public ngAfterContentInit() {
        console.log('after init');
    }
}
