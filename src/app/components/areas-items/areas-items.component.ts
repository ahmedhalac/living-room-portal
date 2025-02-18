import { Component } from '@angular/core';
import { AccordionComponent } from '../../shared/components/accordion/accordion.component';

@Component({
  selector: 'app-areas-items',
  standalone: true,
  imports: [AccordionComponent],
  templateUrl: './areas-items.component.html',
  styleUrl: './areas-items.component.scss',
})
export class AreasItemsComponent {}
