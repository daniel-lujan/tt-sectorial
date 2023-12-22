import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, SvgIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
