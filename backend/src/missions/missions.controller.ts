import { Controller, Get, Param } from '@nestjs/common';
import { MissionsService } from './missions.service';
import { classToPlain } from 'class-transformer';

@Controller('missions')
export class MissionsController {
  constructor(private missionsService: MissionsService) {}

  @Get()
  async getMissions() {
    const missionEntities = await this.missionsService.getMissions();
    const missions = classToPlain(missionEntities);
    return missions;
  }

  @Get(':id')
  async getMission(@Param('id') id: number) {
    return this.missionsService.getMission(id);
  }
}
