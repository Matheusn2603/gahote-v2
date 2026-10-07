import { Module } from '@nestjs/common';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

import { PrismaModule } from './modules/prisma/prisma.module.js';
import { EventosModule } from './modules/eventos/eventos.module.js';
import { ModeradorModule } from './modules/moderador/moderador.module.js';
import { ModalidadesModule } from './modules/modalidades/modalidades.module.js';
import { TurmasModule } from './modules/turmas/turmas.module.js';
import { ParticipantesModule } from './modules/participantes/participantes.module.js';
import { JogosIndividuaisModule } from './modules/jogosindividuais/jogosindividuais.module.js';
import { JogosColetivosModule } from './modules/jogoscoletivos/jogoscoletivos.module.js';

@Module({
  imports: [
    EventosModule,
    JogosColetivosModule,
    JogosIndividuaisModule,
    ModalidadesModule,
    ModeradorModule,
    ParticipantesModule,
    PrismaModule,
    TurmasModule,
  ],

  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}