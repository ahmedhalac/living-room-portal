import { Component } from '@angular/core';
import { DataSelectorComponent } from './shared/components/data-selector/data-selector.component';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './shared/components/upload-file/upload-file.component';
import { AccordionComponent } from './shared/components/accordion/accordion.component';
import { OverviewSectionComponent } from './components/overview-section/overview-section.component';
import { AreasItemsComponent } from './components/areas-items/areas-items.component';
import { ClientInfoComponent } from './components/client-info/client-info.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ClientInfoComponent, OverviewSectionComponent, AreasItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {}
