import {bootstrap} from 'angular2/platform/browser';
import {provide, Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location, LocationStrategy, HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF} from 'angular2/router';
import {MeetingComponent} from './meeting.component';

@Component({
  selector: 'mcc-app',
  styles: [`
    nav {
      margin-bottom: 40px;
    }
    nav > .row {
      margin-top: 30px;
    }
    nav button {
      margin: 0px 5px;
    }
    nav button.router-link-active {
      background-color: #286090;
      border-color: #204d74;
    }
    hr {
      border: 0;
      height: 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      margin: 75px 0;
    }
  `],
  template: `
    <nav class="row animated fadeIn">
      <div class="row">
        <div class="col-xs-12 text-center">
          <button class="btn btn-primary btn-xl" [class.active]="getLinkStyle('#/meeting')" [routerLink]="['Meeting']"><i class="fa fa-clock-o"></i> Meeting</button>
          <button class="btn btn-primary btn-xl disabled" [class.active]="getLinkStyle('#/toplist')"><i class="fa fa-list"></i> Top list</button>
          <button class="btn btn-primary btn-xl disabled" [class.active]="getLinkStyle('#/about')"><i class="fa fa-users"></i> About</button>
        </div>
      </div>
    </nav>
    <hr/>
    <main class="row animated fadeIn">
      <div>
        <div class="col-xs-12">
          <router-outlet></router-outlet>
        </div>
      </div>
    </main>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [Location]
})

@RouteConfig([
  { path: '/meeting', name: 'Meeting', component: MeetingComponent, useAsDefault: true }
])

export class AppComponent {

  constructor(private location: Location) { }

  getLinkStyle(path: String) {
    return this.location.path() === path;
  }

}

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]).catch(err => console.error(err));
