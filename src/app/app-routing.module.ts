import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { SubcategoryComponent } from './pages/subcategory/subcategory.component';
import { AddCategoryComponent } from './pages/add-category/add-category.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'category/:id',
    component: CategoryComponent,
  },
  {
    path: 'category/:id/:subid',
    component: SubcategoryComponent,
  },
  {
    path: 'add-category',
    component: AddCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
