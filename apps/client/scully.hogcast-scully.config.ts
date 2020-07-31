import { environment } from './src/environments/environment';
import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'client',
  outDir: './dist/static',
  routes: {
    '/episode/:id': {
      type: 'json',
      id: {
        url: `${environment.api}/episodes`,
        property: 'id'
      }
    }
  }
};