import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { injectMutation, injectQuery } from '@ngneat/query';
import { environment } from '../../environment/environment';

@Injectable({ providedIn: 'root' })
export class BlogService {
  #http = inject(HttpClient);
  #query = injectQuery();
  #mutation = injectMutation();

  getCategories() {
    return this.#query({
      queryKey: ['categories'] as const,
      queryFn: () => {
        return this.#http.get<Category[]>(
          `${environment.apiUrl}/blog/categories`
        );
      },
      staleTime: 1000 * 60 * 10, // 10 minutes
    });
  }

  addCategory() {
    return this.#mutation({
      mutationFn: (data: AddCategoryPayload) => {
        return this.#http.post<AddCategoryResponse>(
          `${environment.apiUrl}/blog/categories`,
          data
        );
      },
    });
  }

  addSubcategory() {
    return this.#mutation({
      mutationFn: (data: AddSubcategoryPayload) => {
        return this.#http.post<AddSubcategoryResponse>(
          `${environment.apiUrl}/blog/subcategories`,
          data
        );
      },
    });
  }

  addTopic() {
    return this.#mutation({
      mutationFn: (data: AddTopicPayload) => {
        return this.#http.post<AddTopicResponse>(
          `${environment.apiUrl}/blog/topics`,
          data
        );
      },
    });
  }
}
