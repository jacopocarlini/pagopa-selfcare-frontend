import { WrapperStatusEnum } from '../api/generated/portal/StationDetailResource';
import {
  Protocol4ModEnum,
  ProtocolEnum,
  RedirectProtocolEnum,
  StationDetailsDto,
} from '../api/generated/portal/StationDetailsDto';

export enum StationFormAction {
  Create = 'create',
  Edit = 'edit',
  Duplicate = 'duplicate',
}

export enum FormAction {
  Create = 'create',
  Edit = 'edit',
  Duplicate = 'duplicate',
}

export enum StationCategory {
  AsyncGPD = 'AsyncGPD',
  SyncNewConn = 'SyncNewConn',
  SyncGAD = 'SyncGAD',
}

export type StationOnCreation = {
  activationDate?: Date | undefined;
  associatedCreditorInstitutions?: number | undefined;
  brokerCode: string;
  brokerDescription?: string | undefined;
  brokerObjId?: number | undefined;
  createdAt?: Date | undefined;
  enabled?: boolean;
  endpointIp?: string | undefined;
  endpointPath?: string | undefined;
  endpointPort?: number | undefined;
  flagOnline?: boolean | undefined;
  ip?: string | undefined;
  ip4Mod?: string | undefined;
  modifiedAt?: Date | undefined;
  newPassword?: string | undefined;
  password?: string | undefined;
  port?: number | undefined;
  port4Mod?: number | undefined;
  primitiveVersion: number;
  protocol?: ProtocolEnum | undefined;
  protocol4Mod?: Protocol4ModEnum | undefined;
  proxyConcat: string;
  proxyEnabled?: boolean | undefined;
  proxyHost?: string | undefined;
  proxyPassword?: string | undefined;
  proxyPort?: number | undefined;
  proxyUsername?: string | undefined;
  redirectIp: string;
  redirectPath: string;
  redirectPort: number;
  redirectProtocol: RedirectProtocolEnum;
  redirectQueryString: string;
  rtInstantaneousDispatch?: boolean | undefined;
  service?: string | undefined;
  service4Mod?: string | undefined;
  stationCode: string;
  targetConcat: string;
  targetHost: string;
  targetHostPof?: string;
  targetPath: string;
  targetPathPof?: string;
  targetPort: number;
  targetPortPof?: number;
  threadNumber?: number | undefined;
  timeoutA?: number | undefined;
  timeoutB?: number | undefined;
  timeoutC?: number | undefined;
  version?: number | undefined;
  wrapperStatus?: WrapperStatusEnum;
  gdpConcat: string;
  newConnConcat: string;
};

export type StationDetail = {
  anagraphic: {
    status: 'ACTIVE' | 'TO_EDIT' | 'REVIEW';
    stationId: string;
    version: string;
    primitiveVersion: number;
    password: string;
    redirectUrl: string;
    activationDate: string;
  };
  target: {
    address: string;
    service: string;
    port: string;
  };
  associatesEC: {
    associates: string;
  };
  changes: {
    lastChangesDate: string;
    operatedBy: string;
  };
};

export interface IProxyConfigItem {
  newConnectivity: string;
  oldConnectivity: string;
}
export interface IProxyConfig {
  LOCAL_DEV: IProxyConfigItem;
  TEST: IProxyConfigItem;
  DEV: IProxyConfigItem;
  UAT: IProxyConfigItem;
  PROD: IProxyConfigItem;
}

export const ProxyConfigs: IProxyConfig = {
  LOCAL_DEV: {
    newConnectivity: 'http://10.79.20.33:80',
    oldConnectivity: 'http://10.101.1.95:8080',
  },
  TEST: {
    newConnectivity: 'http://10.79.20.33:80',
    oldConnectivity: 'http://10.101.1.95:8080',
  },
  DEV: { newConnectivity: 'http://10.79.20.33:80', oldConnectivity: 'http://10.101.1.95:8080' },
  UAT: { newConnectivity: 'http://10.79.20.33:80', oldConnectivity: 'http://10.101.1.95:8080' },
  PROD: { newConnectivity: 'http://10.79.20.35:80', oldConnectivity: 'http://10.102.1.85:8080' },
};

export interface INewConnConfigItem {
  forwarder01: string;
}
export interface INewConnConfig {
  LOCAL_DEV: INewConnConfigItem;
  TEST: INewConnConfigItem;
  DEV: INewConnConfigItem;
  UAT: INewConnConfigItem;
  PROD: INewConnConfigItem;
}

export const NewConnConfigs: INewConnConfig = {
  LOCAL_DEV: {
    forwarder01: 'https://api.uat.platform.pagopa.it/pagopa-node-forwarder/api/v1/forward',
  },
  TEST: {
    forwarder01: 'https://api.uat.platform.pagopa.it/pagopa-node-forwarder/api/v1/forward',
  },
  DEV: { forwarder01: 'https://api.uat.platform.pagopa.it/pagopa-node-forwarder/api/v1/forward' },
  UAT: { forwarder01: 'https://api.uat.platform.pagopa.it/pagopa-node-forwarder/api/v1/forward' },
  PROD: { forwarder01: 'https://api.platform.pagopa.it/pagopa-node-forwarder/api/v1/forward' },
};

export interface IGPDConfigItem {
  gdp01: string;
}
export interface IGPDConfig {
  LOCAL_DEV: IGPDConfigItem;
  TEST: IGPDConfigItem;
  DEV: IGPDConfigItem;
  UAT: IGPDConfigItem;
  PROD: IGPDConfigItem;
}

export const GPDConfigs = {
  LOCAL_DEV: {
    gdp01: 'https://api.uat.platform.pagopa.it/gpd-paymements/api/v1',
  },
  TEST: {
    gdp01: 'https://api.uat.platform.pagopa.it/gpd-paymements/api/v1',
  },
  DEV: { gdp01: 'https://api.uat.platform.pagopa.it/gpd-paymements/api/v1' },
  UAT: { gdp01: 'https://api.uat.platform.pagopa.it/gpd-paymements/api/v1' },
  PROD: { gdp01: 'https://api.platform.pagopa.it/gpd-paymements/api/v1' },
};
