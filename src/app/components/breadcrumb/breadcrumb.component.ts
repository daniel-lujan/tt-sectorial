import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [SvgIconComponent, RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css',
})
export class BreadcrumbComponent {
  @Input() elements: Array<BreadcrumbElement> = [];
}
