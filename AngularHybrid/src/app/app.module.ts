

import * as angular from 'angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';

import { downgradeComponent, UpgradeModule } from '@angular/upgrade/static';

@NgModule({
  declarations: [
    TestComponent
  ],
  entryComponents: [
    TestComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
})
export class AppModule {
  public constructor(private upgrade: UpgradeModule) {}

  public ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['app']);
}
 }

angular.module('app', [])
        .component('appRoot', {
          template: `
          <div>AngularJS component</div>
          <test></test>
          `
        })
        .directive('test', downgradeComponent({ component: TestComponent }));

