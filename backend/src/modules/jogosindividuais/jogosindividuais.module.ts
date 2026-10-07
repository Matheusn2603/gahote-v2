import { Module } from '@nestjs/common';

import { JogosIndividuaisController } from './jogosindividuais.controller.js';
import { JogosIndividuaisService } from './jogosindividuais.service.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Module({
  imports: [],
  controllers: [JogosIndividuaisController],
  providers: [JogosIndividuaisService, PrismaService],
})
export class JogosIndividuaisModule {}