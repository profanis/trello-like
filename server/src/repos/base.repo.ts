import { Nullable } from '../models/nullable';
import { Document,  Model, Schema, Query } from 'mongoose';

export class BaseRepo<T> {


  constructor(protected entity: Model<T & Document>) {}

  public retrieve(): Query<T[]> {
    return this.entity.find({});
  }

  public findById(id: string): Query<Nullable<T>> {
    return this.entity.findById(id);
  }

    // TODO the conditions could be of model type
  public find(conditions: object): Query<T[]> {
    return this.entity.find(conditions);
  }

    // TODO the conditions could be of model type
  public findOne(conditions: object): Query<Nullable<T>> {
    return this.entity.findOne(conditions);
  }

  public create(model: T): any {
    const demoModel = new this.entity(model);
    return demoModel.save();
  }

  public update(id: string, model: T): Query<Nullable<T>> {
    return this.entity.findByIdAndUpdate(id, { $set: model }, { new: true });
  }

  public delete(id: string): any {
    return this.entity.remove({ _id: id });
  }


}