import { Module } from '@nestjs/common';

import { EventosController } from './eventos.controller.js';
import { EventosService } from './eventos.service.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Module({
  imports: [],
  controllers: [EventosController],
  providers: [EventosService, PrismaService],
})
export class EventosModule {}