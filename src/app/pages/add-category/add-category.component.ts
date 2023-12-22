import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { SvgIconComponent } from 'angular-svg-icon';
import { ButtonComponent } from '../../components/button/button.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [SvgIconComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css',
})
export class AddCategoryComponent {
  catId: string | undefined;
  subId: string | undefined;
  categories = inject(BlogService).getCategories();
  catData = {} as Category;
  data = {} as SubCategory;
  addCategory = inject(BlogService).addCategory();
  addSubcategory = inject(BlogService).addSubcategory();
  addTopic = inject(BlogService).addTopic();

  form: FormGroup;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.catId = params['cat'];
      this.subId = params['sub'];
    });

    this.categories.result$.subscribe((res) => {
      if (res.data?.length) {
        if (this.catId) {
          this.catData =
            res.data.find((item) => item._id === this.catId) ??
            ({} as Category);

          if (this.subId) {
            this.data =
              this.catData.subcategories.find(
                (item) => item._id === this.subId
              ) ?? ({} as SubCategory);
          }
        }
      }
    });

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      description: new FormControl(''),
      isActive: new FormControl(true),
    });
  }

  onSubmit() {
    if (this.catId) {
      if (this.subId) {
        this.addTopic.mutate({
          name: this.form.value.name,
        });
      } else {
        this.addSubcategory.mutate({
          name: this.form.value.name,
        });
      }
    } else {
      this.addCategory.mutate(this.form.value);
    }
  }
}
