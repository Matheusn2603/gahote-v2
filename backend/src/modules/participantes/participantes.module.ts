import { Module } from '@nestjs/common';

import { ParticipantesController } from './participantes.controller.js';
import { ParticipantesService } from './participantes.service.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Module({
  imports: [],
  controllers: [ParticipantesController],
  providers: [ParticipantesService, PrismaService],
})
export class ParticipantesModule {}