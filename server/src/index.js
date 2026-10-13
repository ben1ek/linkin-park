import { readConfig } from './config.js';
import { FacebookPostsService } from './facebook-posts-service.js';
import { createApp } from './app.js';

let config;
try { config = readConfig(); }
catch (error) { console.error(error.message); process.exit(1); }
const server = createApp({ service: new FacebookPostsService(config), origins: config.origins });
server.listen(config.port, '0.0.0.0', () => console.log('News API listening on port ' + config.port));
server.on('error', () => { console.error('News API server error.'); process.exit(1); });
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    server.close(() => process.exit(0));
    setTimeout(() => process.exit(1), 10_000).unref();
  });
}
