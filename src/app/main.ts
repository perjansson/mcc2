import {bootstrap} from 'angular2/platform/browser';
import {provide, enableProdMode} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {Location, LocationStrategy, HashLocationStrategy} from 'angular2/platform/common';
import {AppComponent} from './app.component';

enableProdMode();

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]).catch(err => console.error(err));
