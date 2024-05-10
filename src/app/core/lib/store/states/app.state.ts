// state/app.state.ts
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SetLoading, SetTitle } from '../actions/app.actions';

export interface AppStateModel {
  loading: boolean;
  title: string;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    loading: false,
    title: 'Bulk Load App',
  },
})
export class AppState {
  // Selectors
  @Selector()
  static isLoading(state: AppStateModel): boolean {
    return state.loading;
  }

  @Selector()
  static title(state: AppStateModel): string {
    return state.title;
  }

  // Actions
  @Action(SetLoading)
  setLoading(ctx: StateContext<AppStateModel>, action: SetLoading) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      loading: action.payload,
    });
  }

  @Action(SetTitle)
  setTitle(ctx: StateContext<AppStateModel>, action: SetTitle) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      title: action.payload,
    });
  }
}
