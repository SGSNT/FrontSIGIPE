import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [HeaderComponent, SidenavComponent, MainComponent],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.scss'
})
export class FrameComponent {
  
}