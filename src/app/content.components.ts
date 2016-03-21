import {Component} from "angular2/core";

import {ProgramListComponent} from "../program/list.components";

@Component({
  selector: `nhk-content`,
  template: `
  <nhk-program-list></nhk-program-list>
  `,
  directives: [ProgramListComponent]
})
export class ContentComponent {
}
