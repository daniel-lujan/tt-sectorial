import { Component, HostListener, Input } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { StatusChipComponent } from '../status-chip/status-chip.component';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [SvgIconComponent, StatusChipComponent],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css',
})
export class CategoryCardComponent {
  @Input() category: Partial<Category> = {} as Category;
  isHovered = false;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHovered = false;
  }
}
