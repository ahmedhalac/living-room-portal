import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  standalone: true,
})
export class AccordionComponent {
  @Input() title = 'Accordion Title';
  @Input() isDisabled = false;
  @Input() shouldShowAdditionalText = false;

  expanded = false;

  toggle(): void {
    if (!this.isDisabled) {
      this.expanded = !this.expanded;
    }
  }
}
