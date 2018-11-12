import * as angular from 'angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';

import { downgradeComponent, UpgradeModule } from '@angular/upgrade/static';

angular.module('app', [])
    .component('appRoot', {
        template: `
          <div>AngularJS component</div>
          <test></test>
          <ng-component></ng-component>
          `
    })
    .directive('test', downgradeComponent({ component: TestComponent }))
    .directive('ngComponent', downgradeComponent({ component: AppComponent }));
