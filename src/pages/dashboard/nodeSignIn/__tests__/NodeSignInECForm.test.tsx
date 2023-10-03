import { ThemeProvider } from '@mui/system';
import { theme } from '@pagopa/mui-italia';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createStore, store } from '../../../../redux/store';
import NodeSignInECForm from '../NodeSignInECForm';
import { PortalApi } from '../../../../api/PortalApiClient';
import { CreditorInstitutionDetailsResource } from '../../../../api/generated/portal/CreditorInstitutionDetailsResource';

const renderApp = (
  injectedStore?: ReturnType<typeof createStore>,
  injectedHistory?: ReturnType<typeof createMemoryHistory>,
  ecNodeData?: CreditorInstitutionDetailsResource
) => {
  const store = injectedStore ? injectedStore : createStore();
  const history = injectedHistory ? injectedHistory : createMemoryHistory();
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <NodeSignInECForm goBack={jest.fn()} ecNodeData={ecNodeData} />
        </Router>
      </ThemeProvider>
    </Provider>
  );
  return { store, history };
};

const setupForm = () => {
  const address = screen.getByTestId('address-test') as HTMLInputElement;
  const city = screen.getByTestId('city-test') as HTMLInputElement;
  const province = screen.getByTestId('province-test') as HTMLSelectElement;
  const CAP = screen.getByTestId('CAP-test') as HTMLInputElement;
  const fiscalDomicile = screen.getByTestId('fiscal-domicile-test') as HTMLInputElement;

  fireEvent.change(address, { target: { value: 'Via Calindri 21' } });
  expect(address.value).toBe('Via Calindri 21');

  fireEvent.change(city, { target: { value: 'Milano' } });
  expect(city.value).toBe('Milano');

  fireEvent.change(province, { target: { value: 'MI' } });
  expect(province.value).toBe('MI');

  fireEvent.change(CAP, { target: { value: '11111' } });
  expect(CAP.value).toBe('11111');

  fireEvent.change(fiscalDomicile, { target: { value: 'Via Calindri 21' } });
  expect(fiscalDomicile.value).toBe('Via Calindri 21');
};

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  jest.spyOn(console, 'warn').mockImplementation(() => {});
});

afterEach(cleanup);

describe('NodeSignInECForm', (injectedHistory?: ReturnType<typeof createMemoryHistory>) => {
  const history = injectedHistory ? injectedHistory : createMemoryHistory();

  test('Test rendering NodeSignInECForm and Sumbit', async () => {
    renderApp();

    setupForm();

    const confirmBtn = await screen.findByTestId('continue-button-test');
    fireEvent.click(confirmBtn);
  });

  test('Test rendering NodeSignInECForm and Sumbit', async () => {
    renderApp();

    setupForm();

    const backBtn = await screen.findByTestId('back-button-test');
    fireEvent.click(backBtn);
  });

  test('Test rendering NodeSignInECForm and Sumbit', async () => {
    renderApp();

    setupForm();

    const confirmBtn = await screen.findByTestId('continue-button-test');
    fireEvent.click(confirmBtn);

    PortalApi.createECDirect = async (): Promise<CreditorInstitutionDetailsResource> =>
      Promise.reject('mocked error response for tests');
  });
});