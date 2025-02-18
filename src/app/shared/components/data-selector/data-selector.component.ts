import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-selector',
  imports: [],
  templateUrl: './data-selector.component.html',
  styleUrl: './data-selector.component.scss',
})
export class DataSelectorComponent {
  @Input() title!: string;
  @Input() name!: string;
}
