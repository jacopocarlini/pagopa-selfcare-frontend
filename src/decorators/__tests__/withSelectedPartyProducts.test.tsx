import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, RootState } from '../../redux/store';
import { verifyFetchPartyDetailsMockExecution } from '../../services/__mocks__/partyService';
import { verifyFetchPartyProductsMockExecution } from '../../services/__mocks__/productService';
import { storageTokenOps } from '@pagopa/selfcare-common-frontend/utils/storage';
import { testToken } from '../../utils/constants';
import withSelectedPartyProducts from '../withSelectedPartyProducts';

jest.mock('../../services/partyService');
jest.mock('../../services/productService');

const expectedPartyId: string = '26a0aabf-ce6a-4dfa-af4e-d4f744a8b944';

let fetchPartyDetailsSpy: jest.SpyInstance;
let fetchPartyProductsSpy: jest.SpyInstance;

beforeEach(() => {
  fetchPartyDetailsSpy = jest.spyOn(require('../../services/partyService'), 'fetchParties');
  fetchPartyProductsSpy = jest.spyOn(require('../../services/productService'), 'fetchProducts');

  storageTokenOps.write(testToken); // party with partyId="onboarded"
});

const renderApp = async (
  waitSelectedParty: boolean,
  injectedStore?: ReturnType<typeof createStore>
) => {
  const store = injectedStore ? injectedStore : createStore();

  const Component = () => <></>;
  const DecoratedComponent = withSelectedPartyProducts(Component);

  render(
    <Provider store={store}>
      <DecoratedComponent />
    </Provider>
  );

  if (waitSelectedParty) {
    await waitFor(() => expect(store.getState().parties.selected).not.toBeUndefined());
  }

  return { store, history };
};

test('Test default behavior when no parties', async () => {
  const { store } = await renderApp(true);
  checkSelectedParty(store.getState());

  // test when selected party already in store
  await renderApp(true, store);
  checkMockInvocation(1);
});

const checkSelectedParty = (state: RootState) => {
  const party = state.parties.selected;
  const partyProducts = state.parties.selectedProducts;
  verifyFetchPartyDetailsMockExecution(party!);
  verifyFetchPartyProductsMockExecution(partyProducts!);
};

const checkMockInvocation = (expectedCallsNumber: number) => {
  expect(fetchPartyDetailsSpy).toBeCalledTimes(expectedCallsNumber);
  expect(fetchPartyDetailsSpy).toBeCalledWith();
};
