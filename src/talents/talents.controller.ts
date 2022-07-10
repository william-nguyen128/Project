import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTalentDto } from './dto/create-talent.dto';
import { UpdateTalentDto } from './dto/update-talent.dto';
import { Talent } from './schemas/talent.schema';
import { TalentsService } from './talents.service';

@Controller('talents')
export class TalentsController {
  constructor(private readonly talentService: TalentsService) {}

  @Get()
  async getTalents(): Promise<Talent[]> {
    return this.talentService.getTalents();
  }

  @Get(':talentId')
  async getTalent(@Param('talentId') talentId: string): Promise<Talent> {
    return this.talentService.getTalentById(talentId);
  }

  @Post()
  async createTalent(@Body() body: Talent): Promise<Talent> {
    return this.talentService.createTalent(body);
  }

  // @Patch(':talentId')
  // async updateTalent(
  //   @Param('talentId') talentId: string,
  //   @Body() updateTalentDto: UpdateTalentDto,
  // ): Promise<Talent> {
  //   return this.talentService.updateTalent(talentId, updateTalentDto);
  // }
}
