import { IComboList } from '@ropabajo/shared/interfaces';

export interface IBulkLoadCreateForm {
  formatCode: string;
}

export interface IBulkLoadCreate {
  loading: boolean;
  title: string;
  form: IBulkLoadCreateForm;
  combos: {
    formats: IComboList;
  };
}
