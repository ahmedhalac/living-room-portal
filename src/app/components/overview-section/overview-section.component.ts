import { Component } from '@angular/core';
import { AccordionComponent } from '../../shared/components/accordion/accordion.component';
import { AboutUsComponent } from '../../shared/components/about-us/about-us.component';
import { ProjectDescriptionComponent } from '../../shared/components/project-description/project-description.component';
import { CoverPageComponent } from '../../shared/components/cover-page/cover-page.component';

@Component({
  selector: 'app-overview-section',
  imports: [AccordionComponent, AboutUsComponent, ProjectDescriptionComponent, CoverPageComponent],
  standalone: true,
  templateUrl: './overview-section.component.html',
  styleUrl: './overview-section.component.scss',
})
export class OverviewSectionComponent {}
