import { Module } from '@nestjs/common';

import { JogosColetivosController } from './jogoscoletivos.controller.js';
import { JogosColetivosService } from './jogoscoletivos.service.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Module({
  imports: [],
  controllers: [JogosColetivosController],
  providers: [JogosColetivosService, PrismaService],
})
export class JogosColetivosModule {}