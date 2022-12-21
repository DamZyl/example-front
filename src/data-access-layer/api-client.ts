import { CommentApi, EnumApi } from '../api-types/api';
import { Configuration } from '../api-types/configuration';

const TIME_OUT_TIME = 5000;
const basePath = 'https://localhost:7254';
const baseHeaders = {
  'Cache-Control': 'no-store',
  'Content-Type': 'application/json',
};

const baseConfiguration = new Configuration({
  basePath,
  baseOptions: {
    timeout: TIME_OUT_TIME,
    headers: baseHeaders,
  },
});

// const bearerConfigParams = (apiKey?: string): Configuration =>
//   new Configuration({
//     basePath,
//     baseOptions: {
//       timeout: TIME_OUT_TIME,
//       headers: {
//         ...baseHeaders,
//         Authorization: `Bearer ${apiKey}`,
//       },
//     },
//   });

export const commentApi = new CommentApi(baseConfiguration);
export const enumApi = new EnumApi(baseConfiguration);
