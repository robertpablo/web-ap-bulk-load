// actions/app.actions.ts
export class SetLoading {
  static readonly type = '[App] Set Loading';
  constructor(public payload: boolean) {}
}

export class SetTitle {
  static readonly type = '[App] Set Title';
  constructor(public payload: string) {}
}
