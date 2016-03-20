import {Component} from "angular2/core";
import {HelloWorld} from "../helloworld/helloworld.components";

@Component({
  selector: `nhk-app`,
  template: `
    <hello-world></hello-world>
  `,
  directives: [HelloWorld]
})
export class App {
}
