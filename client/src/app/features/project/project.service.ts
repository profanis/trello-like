import {Apollo} from 'apollo-angular';

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private apollo: Apollo) { }

  getProjectById<T>(query: any, variables: {}): Observable<T> {

    return this.apollo.watchQuery<T>({
      query,
      variables
    })
      .valueChanges.pipe(
        map(({data}) => data)
      );
  }
}
