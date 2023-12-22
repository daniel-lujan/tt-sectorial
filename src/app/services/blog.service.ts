import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { injectQuery } from '@ngneat/query';
import { environment } from '../../environment/environment';

@Injectable({ providedIn: 'root' })
export class BlogService {
  #http = inject(HttpClient);
  #query = injectQuery();

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
}
