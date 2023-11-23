const regexReplace = require('regex-replace');

regexReplace(
  'readonly sort\\?: array;',
  'readonly sort?: Array<string>;',
  'src/api/generated/portal/requestTypes.ts',
  { fileContentsOnly: true }
);

regexReplace(
  'import * as t from "io-ts";',
  'import * as t from "io-ts"; \n import { Buffer } from \'buffer\'; \n',
  'src/api/generated/portal/requestTypes.ts',
  { fileContentsOnly: true }
);
