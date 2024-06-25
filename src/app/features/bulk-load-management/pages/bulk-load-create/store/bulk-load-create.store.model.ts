import { IBulkLoadCreate } from './bulk-load-create.store.interface';

export const initialBulkLoadCreateContainerState: {
  bulkLoadCreate: IBulkLoadCreate;
} = {
  bulkLoadCreate: {
    loading: false,
    title: 'Registrar Carga Masiva',
    form: {
      formatCode: '',
    },
    combos: {
      formats: {
        list: [],
        loading: false,
      },
    },
  },
};
