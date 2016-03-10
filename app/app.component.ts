import {bootstrap} from 'angular2/platform/browser';
import {provide, Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Location, LocationStrategy, HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {MeetingComponent} from './meeting/meeting.component';
import {MeetingService} from './meeting/meeting.service';
import {CurrencyService} from './currency/currency.service';

@Component({
  selector: 'mcc-app',
  styles: [`
    nav {
      margin-bottom: 20px;
    }
    nav > .row {
      margin-top: 30px;
    }
    nav button {
      margin: 0px 3px;
    }
    .nav button:focus {
      outline:0;
    }
    nav button.router-link-active {
      background-color: #286090;
      border-color: #204d74;
    }
    .btn-mcc {
      font-size: 16px;
      padding: 8px 12px;
      border-radius: 8px;
      margin-left: auto;
      margin-right: auto;
    }
    hr {
      border: 0;
      height: 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      margin: 20px 0;
    }
    @media only screen and (min-width : 480px) {
      nav {
        margin-bottom: 40px;
      }
      nav button {
        margin: 0px 5px;
      }
      .btn-mcc {
        font-size: 26px;
        padding: 13px 20px;
        border-radius: 8px;
        margin-left: auto;
        margin-right: auto;
      }
      hr {
        margin: 50px 0;
      }
    }
  `],
  template: `
    <nav class="row animated fadeIn">
      <div class="row">
        <div class="col-xs-12 text-center">
          <button class="btn btn-primary btn-mcc" [class.active]="getLinkStyle('#/meeting')" [routerLink]="['Meeting']"><i class="fa fa-clock-o"></i> Meeting</button>
          <button class="btn btn-primary btn-mcc disabled" [class.active]="getLinkStyle('#/toplist')"><i class="fa fa-list"></i> Top list</button>
          <button class="btn btn-primary btn-mcc disabled" [class.active]="getLinkStyle('#/about')"><i class="fa fa-users"></i> About</button>
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
  providers: [Location, HTTP_PROVIDERS, MeetingService, CurrencyService]
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
