import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Talent, TalentSchema } from './schemas/talent.schema';
import { TalentsController } from './talents.controller';
import { TalentsRepository } from './talents.repository';
import { TalentsService } from './talents.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Talent.name, schema: TalentSchema }]),
  ],
  controllers: [TalentsController],
  providers: [TalentsService, TalentsRepository],
})
export class TalentModule {}
