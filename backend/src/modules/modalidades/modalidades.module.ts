import { Module } from '@nestjs/common';

import { ModalidadesController } from './modalidades.controller.js';
import { ModalidadesService } from './modalidades.service.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Module({
  imports: [],
  controllers: [ModalidadesController],
  providers: [ModalidadesService, PrismaService],
})
export class ModalidadesModule {}