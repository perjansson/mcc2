/// <reference path="../typings/bootstrap/bootstrap.d.ts" />

import {bootstrap} from 'angular2/platform/browser';
import {provide, Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location, LocationStrategy, HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF} from 'angular2/router';

@Component({
  selector: 'mcc-app',
  styles: [``],
  template: `
    <main>
      <div class="row">
        <div class="col-xs-12">
          <router-outlet></router-outlet>
        </div>
      </div>
    </main>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [Location]
})

export class AppComponent {

  constructor() { }
}

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]).catch(err => console.error(err));
