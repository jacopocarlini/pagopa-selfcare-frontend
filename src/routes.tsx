// import { TOS } from './pages/tos/TOS';
import { ENV } from './utils/env';

export const BASE_ROUTE = ENV.PUBLIC_URL;

const ROUTES = {
  AUTH: `${BASE_ROUTE}/auth`,
  HOME: `${BASE_ROUTE}`,
  NODE_SIGNIN: `${BASE_ROUTE}/node-signin`,
  TOS: `${BASE_ROUTE}/terms-of-service`,
  APIKEYS: `${BASE_ROUTE}/api-keys`,
  APIKEYS_CREATE: `${BASE_ROUTE}/add-apikey`,

  CHANNELS: `${BASE_ROUTE}/channels`,
  CHANNEL_DETAIL: `${BASE_ROUTE}/channels/:channelId`,
  CHANNEL_EDIT: `${BASE_ROUTE}/channels/:channelId/:actionId`,
  CHANNEL_PSP_LIST: `${BASE_ROUTE}/channels/:channelId/psp-list`,
  CHANNEL_ASSOCIATE_PSP: `${BASE_ROUTE}/channels/:channelId/associate-psp`,
  CHANNEL_ADD: `${BASE_ROUTE}/channels/add-channel/`,

  STATIONS: `${BASE_ROUTE}/stations`,
  STATION_DETAIL: `${BASE_ROUTE}/stations/:stationId`,
  STATION_EDIT: `${BASE_ROUTE}/stations/:stationId/:actionId`,
  STATION_EC_LIST: `${BASE_ROUTE}/stations/:stationId/ec-list`,
  STATION_ASSOCIATE_EC: `${BASE_ROUTE}/stations/:stationId/associate-ec`,
  STATION_ADD: `${BASE_ROUTE}/stations/add-station/`,

  IBAN: `${BASE_ROUTE}/iban`,
  IBAN_DETAIL: `${BASE_ROUTE}/iban/:ibanId`,
  IBAN_EDIT: `${BASE_ROUTE}/iban/:ibanId/:actionId`,
  IBAN_ADD: `${BASE_ROUTE}/iban/add-iban/`,

  COMMISSION_PACKAGES: `${BASE_ROUTE}/comm-packages`,
  COMMISSION_PACKAGES_ADD: `${BASE_ROUTE}/comm-packages/add-package/`,
  COMMISSION_PACKAGES_EDIT: `${BASE_ROUTE}/comm-packages/:nameId/:actionId`,

  OPERATION_TABLE_ADDEDIT: `${BASE_ROUTE}/operation-table/addedit`,
  OPERATION_TABLE_DETAILS: `${BASE_ROUTE}/operation-table/:operationTableId`,
  OPERATION_TABLE_LIST: `${BASE_ROUTE}/operation-table-list`,

  /* TOS: {
    PATH: '/terms-of-service',
    LABEL: { it: 'Termini di servizio', en: 'Terms of service' },
    COMPONENT: TOS,
    PUBLIC: true,
    AUTH_LEVELS: 'any',
  }, */
};

export default ROUTES;
