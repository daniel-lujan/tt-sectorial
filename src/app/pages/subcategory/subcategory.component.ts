import { Component, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { CategoryCardComponent } from '../../components/category-card/category-card.component';
import { ButtonComponent } from '../../components/button/button.component';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-subcategory',
  standalone: true,
  imports: [
    BreadcrumbComponent,
    CategoryCardComponent,
    ButtonComponent,
    SvgIconComponent,
    RouterLink,
  ],
  templateUrl: './subcategory.component.html',
  styleUrl: './subcategory.component.css',
})
export class SubcategoryComponent {
  categories = inject(BlogService).getCategories();
  catId = '';
  subId = '';
  catData = {} as Category;
  data = {} as SubCategory;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.catId = params['id'];
      this.subId = params['subid'];
    });

    this.categories.result$.subscribe((res) => {
      if (res.data?.length) {
        this.catData =
          res.data.find((item) => item._id === this.catId) ?? ({} as Category);
        this.data =
          this.catData.subcategories.find((item) => item._id === this.subId) ??
          ({} as SubCategory);
      }
    });
  }
}
