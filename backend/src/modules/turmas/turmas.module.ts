import { Module } from '@nestjs/common';

import { TurmasController } from './turmas.controller.js';
import { TurmasService } from './turmas.service.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Module({
  imports: [],
  controllers: [TurmasController],
  providers: [TurmasService, PrismaService],
})
export class TurmasModule {}