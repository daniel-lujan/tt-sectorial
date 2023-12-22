import { Component, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { AsyncPipe } from '@angular/common';
import { CategoryCardComponent } from '../../components/category-card/category-card.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    CategoryCardComponent,
    RouterLink,
    ButtonComponent,
    SvgIconComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  categories = inject(BlogService).getCategories();
}
