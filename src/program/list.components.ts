import {Component} from "angular2/core";
import {ProgramService} from "../shared/service/program.service";

@Component({
  selector: `nhk-program-list`,
  template: `
    <h1>Program List</h1>
    <ul>
        <li *ngFor="#program of programs">
            <span>{{program.title}}</span>
        </li>
    </ul>
  `,
  providers: [ProgramService]
})

export class ProgramListComponent {
  private programs: any[];

  constructor(private programService: ProgramService) {
    this.programs = programService.getAll();
  }
}
