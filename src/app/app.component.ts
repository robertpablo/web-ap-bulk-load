import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { AppState } from './core/lib/store';
import { ConfigurationService } from '@ropabajo/core';

@Component({
  standalone: true,
  selector: 'rpbj-bulk-load',
  templateUrl: './app.component.html',
  imports: [RouterOutlet],
})
export class AppComponent implements OnInit {
  @Select(AppState.isLoading) isLoading$!: Observable<boolean>;
  @Select(AppState.title) title$!: Observable<string>;

  title: string;
  isLoading: boolean;

  constructor(
    private store: Store,
    private configurationService: ConfigurationService
  ) {
    this.title = this.store.selectSnapshot(AppState.title);
    this.isLoading = this.store.selectSnapshot(AppState.isLoading);
  }

  ngOnInit(): void {
    console.log(this.configurationService.global(), 'global bulk-load');
  }
}
