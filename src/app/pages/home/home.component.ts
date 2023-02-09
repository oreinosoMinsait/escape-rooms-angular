import { Component } from '@angular/core';
import { Section } from './models/section.models';
import { sections } from './sections';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public sectionsFather: Section[] = sections;

}
