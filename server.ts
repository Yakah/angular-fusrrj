import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import * as dotenv from 'dotenv';
import {enableProdMode} from '@angular/core';
import * as express from 'express';
import {join} from 'path';
import {ngExpressEngine} from '@nguniversal/express-engine';
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';
// Enable production mode for faster page renders
enableProdMode();
dotenv.config();
// express app
const app = express();
const PORT = process.env.SERVER_PORT || 8082;
const DIST_FOLDER = join(process.cwd(), 'dist');
// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'client'));

// TODO: implement data requests securely if necessary
app.get('/api/*', (req, res) => {
  res.status(404).send('data requests are not supported yet. There is a separate API server for data requests');
});

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'client')));

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
