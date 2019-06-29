import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import { NextFunction, Request, Response } from 'express';
import { MongoDbConnetion } from '../config/mongo.config';
import { apolloServer } from './api';

class App {
  public app: express.Application;
  private mongoDbConnetion: MongoDbConnetion;

  constructor() {
    this.mongoDbConnetion = new MongoDbConnetion();
    this.mongoDbConnetion.initialize();

    this.app = express();
    this.middleware();
    this.handleOperationalErrors();
  }

    /**
     * Error handling middleware should be defined as the last app.use() method
     */
  private handleOperationalErrors() {
    this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
      console.error(err.stack);
      res.status(500).send(err);
    });
  }

  private middleware(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
    this.applyApolloServer();
  }

  private applyApolloServer(): void {
    apolloServer.applyMiddleware(this);
    console.log(`Apollo server listens to ${apolloServer.graphqlPath}`)    
  }

}

export default new App().app
