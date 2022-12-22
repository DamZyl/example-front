import { CommentApi, EnumApi } from '../api-types/api';
import { Configuration } from '../api-types/configuration';

const TIME_OUT_TIME = 5000;
const basePath = 'https://localhost:7254';
const baseHeaders = {
  'Cache-Control': 'no-store',
  'Content-Type': 'application/json',
};

// TODO: Config
const baseConfig = new Configuration({
  basePath,
  baseOptions: {
    timeout: TIME_OUT_TIME,
    headers: baseHeaders,
  },
});

// const tokenConfig = (token: string) =>
//   new Configuration({
//     basePath,
//     baseOptions: {
//       timeout: TIME_OUT_TIME,
//       headers: {
//         ...baseHeaders,
//         Authorization: `Bearer ${token}`,
//       },
//     },
//   });

// TODO: Api
export const commentApi = new CommentApi(baseConfig);
export const enumApi = new EnumApi(baseConfig);
