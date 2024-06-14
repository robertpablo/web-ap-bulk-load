import { IBulkLoadList } from './bulk-load-list.store.interface';

export const initialBulkLoadContainerState: { bulkLoadList: IBulkLoadList } = {
  bulkLoadList: {
    loading: false,
    title: 'Bandeja de carga de archivos',
    grid: {
      loading: false,
      definition: {
        columns: [
          { label: 'Description carga', field: 'description' },
          { label: 'Código', field: 'stateCode' },
          { label: 'Usuario', field: 'user' },
          {
            label: 'Fecha',
            field: 'date',
            isDatetime: true,
            dateTimeFormat: 'DD/MM/YYYY HH:mm',
          },
        ],
      },
      source: {
        items: [],
        page: 1,
        pageSize: 10,
        total: 0,
        orderBy: 'date',
        orderDir: 'DESC',
        skip: 0,
      },
      error: undefined,
    },
  },
};
