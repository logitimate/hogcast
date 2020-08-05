import { environment } from './apps/client/src/environments/environment';
import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'client',
  outDir: './public',
  distFolder: './dist/apps/client',
  routes: {
    '/episode/:id': {
      type: 'json',
      id: {
        url: `https://hogcast-services.herokuapp.com/api/episodes/changed`,
      }
    }
  }
};