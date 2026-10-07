import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateParticipanteDTO, UpdateParticipanteDTO } from './dtos/participantes.js';

@Injectable()
export class ParticipantesService {
  constructor(private prismaService: PrismaService) {}

  ///
  async create(data: CreateParticipanteDTO) {
    return await this.prismaService.prisma.Participantes.create(data);
  }

  ///
  async list() {
    return await this.prismaService.prisma.Participantes.all();
  }

  ///
  async findById(id: number) {
    const participante = await this.prismaService.prisma.Participantes.first({ id });

    if (!participante) {
      throw new NotFoundException('Participante não encontrado');
    }

    return participante;
  }

  ///
  async update(id: number, data: UpdateParticipanteDTO) {
    await this.findById(id);

    return await this.prismaService.prisma.Participantes
      .where({ id })
      .update(data);
  }

  ///
  async delete(id: number) {
    await this.findById(id);

    await this.prismaService.prisma.Participantes
      .where({ id })
      .delete();

    return {
      message: 'Participante removido com sucesso',
    };
  }
}
