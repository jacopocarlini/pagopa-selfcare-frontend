import { PaymentServiceProviderDetailsResource } from '../api/generated/portal/PaymentServiceProviderDetailsResource';
import { PortalApi } from '../api/PortalApiClient';
import { NodeOnSignInPSP } from '../model/Node';
import { PSPDirectDTO } from '../model/PSP';

import {
  createPSPDirect as createPSPDirectMocked,
  getPSPDetails as getPSPDetailsMocked,
} from './__mocks__/nodeService';

export const createPSPDirect = (psp: NodeOnSignInPSP): Promise<PSPDirectDTO> => {
  /* istanbul ignore if */
  if (process.env.REACT_APP_API_MOCK_PORTAL === 'true') {
    return createPSPDirectMocked(psp);
  } else {
    return PortalApi.createPSPDirect(psp).then((resources) => resources);
  }
};

export const getPSPDetails = (pspcode: string): Promise<PaymentServiceProviderDetailsResource> => {
  /* istanbul ignore if */
  if (process.env.REACT_APP_API_MOCK_PORTAL === 'true') {
    return getPSPDetailsMocked(pspcode);
  } else {
    return PortalApi.getPSPDetails(pspcode).then((resources) => resources);
  }
};