import { Component } from '@angular/core';
import { DataSelectorComponent } from '../../shared/components/data-selector/data-selector.component';
import { AccordionComponent } from '../../shared/components/accordion/accordion.component';
import { UploadFileComponent } from '../../shared/components/upload-file/upload-file.component';

@Component({
  selector: 'app-client-info',
  standalone: true,
  imports: [DataSelectorComponent, AccordionComponent, UploadFileComponent],
  templateUrl: './client-info.component.html',
  styleUrl: './client-info.component.scss',
})
export class ClientInfoComponent {
  email = 'dwight@schrutebeetfarms.com';
}
