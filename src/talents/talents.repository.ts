import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Talent, TalentDocument } from './schemas/talent.schema';

@Injectable()
export class TalentsRepository {
  constructor(
    @InjectModel(Talent.name) private talentModel: Model<TalentDocument>,
  ) {}

  async findAll(talentFilterQuery: FilterQuery<Talent>): Promise<Talent[]> {
    return this.talentModel.find(talentFilterQuery);
  }

  async findOne(talentFilterQuery: FilterQuery<Talent>): Promise<Talent> {
    return this.talentModel.findOne(talentFilterQuery);
  }

  async create(talent: Talent): Promise<Talent> {
    const newTalent = new this.talentModel(talent);
    return newTalent.save();
  }

  // async findOneAndUpdate(
  //   talentFilterQuery: FilterQuery<Talent>,
  //   talent: Partial<Talent>,
  // ) {
  //   return this.talentModel.findOneAndUpdate(talentFilterQuery, talent, {
  //     new: true,
  //   });
  // }
}
