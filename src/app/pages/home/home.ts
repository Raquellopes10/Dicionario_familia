import { Component } from '@angular/core';
import{Toolbar} from './../toolbar/toolbar';

@Component({
  selector: 'app-home',
  imports: [ Toolbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
