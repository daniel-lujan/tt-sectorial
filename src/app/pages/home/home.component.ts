import { Component, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { AsyncPipe } from '@angular/common';
import { CategoryCardComponent } from '../../components/category-card/category-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, CategoryCardComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  categories = inject(BlogService).getCategories();
}
