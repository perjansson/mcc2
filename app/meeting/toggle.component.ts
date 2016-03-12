import {Component, EventEmitter, Input, Output, OnInit} from 'angular2/core';

@Component({
  selector: 'toggle',
  styles: [`
    .toggle {
      height: 32px;
      cursor: pointer;
    }
    .toggle input[type="checkbox"], .toggle input[type="radio"] {
      width: 0;
      height: 0;
      padding: 0;
      margin: 0;
      text-indent: -100000px;
      filter: alpha(opacity=0);
      opacity: 0;
    }
    .toggle .handle {
      position: relative;
      top: -30px;
      left: 0;
      display: block;
      width: 50px;
      height: 32px;
      background-color: white;
              border-radius: 19px;
      -webkit-box-shadow: inset 0 0 0 1px #b8bfc8;
         -moz-box-shadow: inset 0 0 0 1px #b8bfc8;
              box-shadow: inset 0 0 0 1px #b8bfc8;
      -webkit-border-radius: 19px;
         -moz-border-radius: 19px;
    }
    .toggle .handle:before, .toggle .handle:after {
      position: absolute;
      top: 1px;
      left: 1px;
      display: block;
      width: 30px;
      height: 30px;
      content: "";
      background-color: white;
      -webkit-box-shadow: inset 0 0 0 1px #b8bfc8, 1px 1px 1px #c7ccd3;
      -moz-box-shadow: inset 0 0 0 1px #b8bfc8, 1px 1px 1px #c7ccd3;
      box-shadow: inset 0 0 0 1px #b8bfc8, 1px 1px 1px #c7ccd3;
      -webkit-transition: all .25s ease-in-out;
      -moz-transition: all .25s ease-in-out;
      transition: all .25s ease-in-out;
      border-radius: 30px;
      -webkit-border-radius: 30px;
      -moz-border-radius: 30px;
    }
    .toggle input[type="checkbox"]:disabled + .handle, .toggle input[type="radio"]:disabled + .handle, .toggle input[type="checkbox"]:disabled + .handle:before, .toggle input[type="radio"]:disabled + .handle:before, .toggle input[type="checkbox"]:disabled + .handle:after, .toggle input[type="radio"]:disabled + .handle:after {
      background-color: #e6e9ed;
      filter: alpha(opacity=60);
      opacity: .6;
    }
    .toggle input[type="checkbox"]:checked + .handle:before, .toggle input[type="radio"]:checked + .handle:before {
      width: 50px;
      background-color: #a0d468;
    }
    .toggle input[type="checkbox"]:checked + .handle:after, .toggle input[type="radio"]:checked + .handle:after {
      left: 20px;
      content: "";
      color: green;
      -webkit-box-shadow: inset 0 0 0 1px #f5f7fa, 1px 1px 1px #c7ccd3;
      -moz-box-shadow: inset 0 0 0 1px #f5f7fa, 1px 1px 1px #c7ccd3;
      box-shadow: inset 0 0 0 1px #f5f7fa, 1px 1px 1px #c7ccd3;
    }
    @media only screen and (min-width : 480px) {
      .toggle {
        height: 62px;
      }
      .toggle .handle {
        top: -50px;
        width: 100px;
        height: 62px;
        border-radius: 38px;
        -webkit-border-radius: 38px;
        -moz-border-radius: 38px;
      }
      .toggle .handle:before, .toggle .handle:after {
        width: 60px;
        height: 60px;
        border-radius: 60px;
        -webkit-border-radius: 60px;
        -moz-border-radius: 60px;
      }
      .toggle input[type="checkbox"]:checked + .handle:before, .toggle input[type="radio"]:checked + .handle:before {
        width: 100px;
      }
      .toggle input[type="checkbox"]:checked + .handle:after, .toggle input[type="radio"]:checked + .handle:after {
        left: 40px;
      }
    }
  `],
  template: `
    <label class="toggle">
      <input type="checkbox" (click)="onToggleClick()">
      <span class="handle"></span>
    </label>
  `
})

export class ToggleComponent {

  @Input() value: boolean;
  @Output() selected = new EventEmitter<boolean>();

  constructor() { }

  onToggleClick() {
    this.value = !this.value;
    this.selected.emit(this.value);
  }

}
