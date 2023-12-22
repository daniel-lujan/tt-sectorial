import { Component, inject } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { ButtonComponent } from '../../components/button/button.component';
import { SvgIconComponent } from 'angular-svg-icon';
import { CategoryCardComponent } from '../../components/category-card/category-card.component';
import { StatusChipComponent } from '../../components/status-chip/status-chip.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    AsyncPipe,
    BreadcrumbComponent,
    CategoryCardComponent,
    ButtonComponent,
    SvgIconComponent,
    RouterLink,
    StatusChipComponent,
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  categories = inject(BlogService).getCategories();
  deleteCategory = inject(BlogService).deleteCategory();
  queryClient = inject(BlogService).queryClient;
  activateCategory = inject(BlogService).activateCategory();
  id = '';
  data = {} as Category;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.categories.result$.subscribe((res) => {
      this.data =
        res.data?.find((item) => item._id === this.id) ?? ({} as Category);
    });
  }

  deleteCategoryHandler() {
    this.deleteCategory.mutate({ categoryId: this.id });

    this.queryClient.removeQueries({
      queryKey: ['categories'],
    });
    this.categories.result$.subscribe(async (res) => {
      await res.refetch();
    });
    this.router.navigate(['/']);
  }

  activateCategoryHandler() {
    this.activateCategory.mutate({
      id: this.id,
      value: !this.data.isActive,
    });

    this.queryClient.removeQueries({
      queryKey: ['categories'],
    });
    this.categories.result$.subscribe(async (res) => {
      await res.refetch();
    });
  }
}
