import {Component}           from "angular2/core";
import {HeaderComponent}     from "./header.components";
import {NavigationComponent} from "./navigation.components";
import {ContentComponent}    from "./content.components";

@Component({
  selector: `nhk-app`,
  template: `
    <nhk-header></nhk-header>
    <nhk-navigation></nhk-navigation>
    <nhk-content></nhk-content>
  `,
  directives: [ContentComponent, HeaderComponent, NavigationComponent]
})
export class AppComponent {
}
