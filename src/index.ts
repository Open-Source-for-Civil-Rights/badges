import express = require('express');
import BadgeBuilder from './badge-builder';
import * as functions from 'firebase-functions';
import {Request, Response} from 'express';

const app = express();
const port = process.env.PORT || 2000;
const mode = process.env.NODE_ENV || 'production';

/**
 * @api {get} / Get the Home Information
 * @apiName Get Home
 * @apiGroup Home
 */
app.get('/api', (req: Request, res: Response) => {
  res.send(`Hello World! Welcome to the BLM Badge Repo! See URL for the available endpoints and badges!`)
})

/**
 * @api {get} /blm Badge that says "SUPPORTS BLM" with two colors
 * @apiName Get BLM Badge
 * @apiGroup Badges
 *
 * @apiParam (Query Parameters) {String} color1=#808080 Color of the first half of the badge
 * @apiParam (Query Parameters) {String} color2=#c83737ff Color of the second half of the badge
 */
app.get('/api/supports-blm', (req: Request, res: Response) => {
  res.send(BadgeBuilder.supportsBlm({
    color1: req.query.color1 as string || undefined,
    color2: req.query.color2 as string || undefined
  }))
})

app.get('/api/blm', (req: Request, res: Response) => {
  res.send(BadgeBuilder.blm({
    color: req.query.color1 as string || undefined
  }))
})
app.get('/api/we-love-blm', (req: Request, res: Response) => {
  res.send(BadgeBuilder.weLoveBlm())
})

if (mode === 'development') {
  app.listen(port, () => {
    console.log(
      `Server is running at http://localhost:2000 in ${mode} mode`,
    );
  });
} else {
  exports.app = functions.https.onRequest(app);
}
