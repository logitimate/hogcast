import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "client",
  outDir: './dist/static',
  routes: {
    '/episode/:id': {
      type: 'json',
      id: {
        url: 'http://localhost:3000/episodes',
        property: 'id'
      }
    }
  }
};