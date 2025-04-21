import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {NavigationComponent} from "../../components/navigation/navigation.component";
import {UserIconComponent} from "../../components/user-icon/user-icon.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, UserIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
