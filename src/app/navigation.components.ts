import {Component} from "angular2/core";

@Component({
  selector: `nhk-navigation`,
  template: `
  <div class="navigation">
    <ul>
      <li>
        <input type="text" placeholder="Input search text">
      </li>
    </ul>
  </div>
  `
})
export class NavigationComponent {
}
