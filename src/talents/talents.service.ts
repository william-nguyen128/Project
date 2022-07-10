import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Talent } from './schemas/talent.schema';
import { TalentsRepository } from './talents.repository';

@Injectable()
export class TalentsService {
  constructor(private readonly talentRepository: TalentsRepository) {}

  async getTalents(): Promise<Talent[]> {
    return this.talentRepository.findAll({});
  }

  async getTalentById(talentId: string): Promise<Talent> {
    return this.talentRepository.findOne({ talentId });
  }

  async createTalent(body: Talent): Promise<Talent> {
    return this.talentRepository.create(body);
  }

  // async updateTalent(talentId: string): Promise<Talent> {
  //   return this.talentRepository.findOneAndUpdate({ talentId })
  // }
}
