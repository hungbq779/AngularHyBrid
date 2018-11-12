
import * as angular from 'angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';

import { downgradeComponent, UpgradeModule } from '@angular/upgrade/static';

@NgModule({
    declarations: [
        TestComponent,
        AppComponent
    ],
    entryComponents: [
        TestComponent,
        AppComponent
    ],
    imports: [
        BrowserModule,
        UpgradeModule
    ],
})
export class AppModule {
    public constructor(private upgrade: UpgradeModule) { }

    public ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, ['app']);
    }
}

function customerController($scope) {
    $scope.customers = [
        { Name: "John", City: "HCM" },
        { Name: "Peter", City: "DN" },
        { Name: "Jane", City: "HN" }];
}

customerController.$inject = ["$scope"];

angular.module('app', [])
    .controller("customerController", customerController)
    .component('appRoot', {
        template: `
          <div>AngularJS component</div>
          <test></test>
          <customer-list></customer-list>
          <ng-component></ng-component>
          `
    })
    .directive('test', downgradeComponent({ component: TestComponent }))
    .directive('ngComponent', downgradeComponent({ component: AppComponent }));
