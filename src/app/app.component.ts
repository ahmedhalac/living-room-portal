import { Component } from '@angular/core';
import { DataSelectorComponent } from './shared/components/data-selector/data-selector.component';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './shared/components/upload-file/upload-file.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, DataSelectorComponent, UploadFileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  email = 'dwight@schrutebeetfarms.com';
}
