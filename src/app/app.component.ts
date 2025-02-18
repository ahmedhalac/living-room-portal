import { Component } from '@angular/core';
import { DataSelectorComponent } from './shared/components/data-selector/data-selector.component';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './shared/components/upload-file/upload-file.component';
import { AccordionComponent } from './shared/components/accordion/accordion.component';
import { CoverPageComponent } from './shared/components/cover-page/cover-page.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { ProjectDescriptionComponent } from './shared/components/project-description/project-description.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    DataSelectorComponent,
    UploadFileComponent,
    AccordionComponent,
    CoverPageComponent,
    AboutUsComponent,
    ProjectDescriptionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  email = 'dwight@schrutebeetfarms.com';
}
