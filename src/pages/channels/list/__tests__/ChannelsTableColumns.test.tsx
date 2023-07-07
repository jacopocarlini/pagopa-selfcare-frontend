import {GridColumnHeaderParams, GridRenderCellParams, GridStateColDef} from '@mui/x-data-grid';
import {cleanup} from '@testing-library/react';
import {buildColumnDefs, renderCell, showChannelCode, showCustomHeader, showStatus,} from '../ChannelsTableColumns';

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
});

afterEach(cleanup);

describe('<ChannelsTableColumns />', () => {
  test('Test of all the functions inside ChannelsTableColumns', () => {
    const rowNode = [
      {
        id: '',
        parent: '',
        depth: 0,
        groupingKey: '',
        groupingField: '',
      },
    ];

    const colDefMocked: GridStateColDef<any, any, any> = {
      computedWidth: 0,
      field: 'channel_code',
      type: 'string',
      hasBeenResized: undefined,
      groupPath: undefined,
      headerName: 'Channel Name',
    };

    const colDefMockedStatus: GridStateColDef<any, any, any> = {
      computedWidth: 0,
      field: 'endabled',
      type: 'string',
      hasBeenResized: undefined,
      groupPath: undefined,
      headerName: 'status',
    };

    const colDefMockedBroker: GridStateColDef<any, any, any> = {
      computedWidth: 0,
      field: 'broker_description',
      type: 'string',
      hasBeenResized: undefined,
      groupPath: undefined,
      headerName: 'Creation Date',
    };

    const customHeaderChannel: GridColumnHeaderParams = {
      field: 'channel_code',
      colDef: colDefMocked,
    };

    const customHeaderBroker: GridColumnHeaderParams = {
      field: 'broker_description',
      colDef: colDefMockedBroker,
    };

    const customHeaderStatus: GridColumnHeaderParams = {
      field: 'enabled',
      colDef: colDefMockedStatus,
    };

    const params: GridRenderCellParams<any, any, any> = {
      value: 'some value',
      row: {
        channel_code: '123456',
        status: 'ACTVE',
      },
      api: undefined,
      id: '1',
      field: 'channel_code',
      rowNode: rowNode[0],
      colDef: colDefMocked,
      cellMode: 'edit',
      hasFocus: false,
      tabIndex: 0,
      getValue: () => jest.fn(),
    };

    const paramsBroker: any = {
      value: 'broker_description',
      row: { broker_description: 'broker_description' },
      field: 'broker_description',
      api: null,
      getValue: () => '',
      colDef: colDefMockedBroker,
      id: '',
      rowNode: rowNode[0],
      cellMode: 'view',
      hasFocus: true,
      tabIndex: 0,
    };

    const paramsStatus: any = {
      value: 'status',
      row: { enabled: 'ACTIVE' },
      field: 'enabled',
      api: null,
      getValue: () => '',
      colDef: colDefMockedStatus,
      id: '',
      rowNode: rowNode[0],
      cellMode: 'view',
      hasFocus: true,
      tabIndex: 0,
    };

    // const ArrayBuildColumnDefs = [
    //   {
    //     field: 'channel_code',
    //     cellClassName: 'justifyContentBold',
    //     headerName: 'Channel Name',
    //     align: 'left',
    //     headerAlign: 'left',
    //     width: 403,
    //     editable: false,
    //     disableColumnMenu: true,
    //     renderHeader: showCustomHeader,
    //     renderCell: (params: any) => showChannelCode(params),
    //     sortable: true,
    //     flex: 4,
    //   },
    //   {
    //     field: 'broker_description',
    //     cellClassName: 'justifyContentNormal',
    //     headerName: 'Creation Date',
    //     align: 'left',
    //     headerAlign: 'left',
    //     width: 404,
    //     editable: false,
    //     disableColumnMenu: true,
    //     renderHeader: showCustomHeader,
    //     renderCell: (params) => renderCell(params, undefined),
    //     sortable: false,
    //     flex: 4,
    //   },
    //   {
    //     field: 'enabled',
    //     cellClassName: 'justifyContentNormal',
    //     headerName: 'Status',
    //     align: 'left',
    //     headerAlign: 'left',
    //     width: 404,
    //     editable: false,
    //     disableColumnMenu: true,
    //     renderHeader: showCustomHeader,
    //     renderCell: (params) => renderCell(params, undefined),
    //     sortable: false,
    //     flex: 4,
    //     enabled: true,
    //   },
    //   {
    //     field: 'actions',
    //     cellClassName: 'justifyContentNormalRight',
    //     type: 'actions',
    //     headerName: '',
    //     align: 'center',
    //     hideSortIcons: true,
    //     disableColumnMenu: true,
    //     editable: false,

    //     getActions: () => <React.Fragment></React.Fragment>,
    //     sortable: false,
    //     flex: 1,
    //   },
    // ] as Array<GridColDef>;

    const mockTFunction = (key: string) => {
      switch (key) {
        case 'channelsPage.channelsTableColumns.headerFields.name':
          return 'Channel Name';
        case 'channelsPage.channelsTableColumns.headerFields.description':
          return 'Creation Date';
        case 'channelsPage.channelsTableColumns.headerFields.status':
          return 'Status';
        default:
          return '';
      }
    };

    buildColumnDefs(mockTFunction, () => jest.fn());

    showChannelCode(params);
    showStatus(params);
    showCustomHeader(customHeaderChannel);
    renderCell(params);

    showChannelCode(paramsBroker);
    showStatus(paramsBroker);
    showCustomHeader(customHeaderBroker);
    renderCell(paramsBroker, undefined);

    showChannelCode(paramsStatus);
    showStatus(paramsStatus);
    showCustomHeader(customHeaderStatus);
    renderCell(paramsStatus, undefined);

    // const columnDefs = buildColumnDefs(mockTFunction, onRowClickMocked);

    // const renderCellMocked =
    //   typeof renderCell !== 'undefined' ? columnDefs[0].renderCell : colDefMocked[0].field;

    // const result = renderCellMocked(ArrayBuildColumnDefs[0].field);
    // expect(result).toEqual(ArrayBuildColumnDefs[0]);

    // const columnDefsBrk = buildColumnDefs(mockTFunction, onRowClickMocked);
    // const renderCellBrkMocked =
    //   typeof renderCell !== 'undefined' ? columnDefsBrk[1].renderCell : colDefMockedBroker[1].field;

    // const resultBrk = renderCellBrkMocked(ArrayBuildColumnDefs[1].field);
    // expect(resultBrk).toEqual(ArrayBuildColumnDefs[1]);

    // const columnDefsStatus = buildColumnDefs(mockTFunction, onRowClickMocked);
    // const renderCellStatus =
    //   typeof renderCell !== 'undefined'
    //     ? columnDefsStatus[2].renderCell
    //     : colDefMockedBroker[1].field;

    // const resultStatus = renderCellStatus(ArrayBuildColumnDefs[2].field);
    // expect(resultStatus).toEqual(ArrayBuildColumnDefs[2]);
  });
});
