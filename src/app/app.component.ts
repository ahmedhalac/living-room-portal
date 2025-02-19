import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewSectionComponent } from './components/overview-section/overview-section.component';
import { AreasItemsComponent } from './components/areas-items/areas-items.component';
import { ClientInfoComponent } from './components/client-info/client-info.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ClientInfoComponent, OverviewSectionComponent, AreasItemsComponent, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {}
