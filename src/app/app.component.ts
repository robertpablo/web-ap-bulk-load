import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { AppState } from './core/lib/store';

@Component({
  standalone: true,
  selector: 'rpbj-bulk-load',
  templateUrl: './app.component.html',
  imports: [RouterOutlet],
})
export class AppComponent {
  @Select(AppState.isLoading) isLoading$!: Observable<boolean>;
  @Select(AppState.title) title$!: Observable<string>;

  title: string;
  isLoading: boolean;

  constructor(private store: Store) {
    this.title = this.store.selectSnapshot(AppState.title);
    this.isLoading = this.store.selectSnapshot(AppState.isLoading);
  }
}
