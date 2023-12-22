import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { injectMutation, injectQuery, injectQueryClient } from '@ngneat/query';
import { environment } from '../../environment/environment';

@Injectable({ providedIn: 'root' })
export class BlogService {
  #client = injectQueryClient();
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

  deleteCategory() {
    return this.#mutation({
      mutationFn: (data: DeleteCategoryPayload) => {
        return this.#http.delete<DeleteCategoryResponse>(
          `${environment.apiUrl}/blog/categories/`,
          {
            params: data,
          }
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

  deleteSubcategory() {
    return this.#mutation({
      mutationFn: (data: DeleteSubcategoryPayload) => {
        return this.#http.delete<DeleteSubcategoryResponse>(
          `${environment.apiUrl}/blog/subcategories/`,
          {
            params: data,
          }
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

  deleteTopic() {
    return this.#mutation({
      mutationFn: (data: DeleteTopicPayload) => {
        return this.#http.delete<DeleteTopicResponse>(
          `${environment.apiUrl}/blog/topics/`,
          {
            params: data,
          }
        );
      },
    });
  }

  activateCategory() {
    return this.#mutation({
      mutationFn: (data: ActivateCategoryPayload) => {
        return this.#http.put<ActivateCategoryResponse>(
          `${environment.apiUrl}/blog/categories/${data.id}/activate`,
          {},
          {
            params: {
              value: data.value.toString(),
            },
          }
        );
      },
    });
  }

  get queryClient() {
    return this.#client;
  }
}
