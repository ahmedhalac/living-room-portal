import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-areas-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './areas-items.component.html',
  styleUrl: './areas-items.component.scss',
})
export class AreasItemsComponent {
  @Input() title!: string;
  expanded = false;
  toggle(): void {
    this.expanded = !this.expanded;
  }
}
