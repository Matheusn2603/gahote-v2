import { Module } from '@nestjs/common';

import { ModeradorController } from './moderador.controller.js';
import { ModeradorService } from './moderador.service.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Module({
  imports: [],
  controllers: [ModeradorController],
  providers: [ModeradorService, PrismaService],
})
export class ModeradorModule {}