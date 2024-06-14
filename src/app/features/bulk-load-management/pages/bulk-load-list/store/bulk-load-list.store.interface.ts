import { IDataGridElement } from '@ropabajo/shared/interfaces';

export interface IBulkLoadListGridItem {
  bulkLoadCode: string;
  payrollObjectCode: string;
  description: string;
  stateCode: string;
  user: string;
  date: string;
}

export interface IBulkLoadList {
  loading: boolean;
  title: string;
  grid: IDataGridElement<IBulkLoadListGridItem>;
}
