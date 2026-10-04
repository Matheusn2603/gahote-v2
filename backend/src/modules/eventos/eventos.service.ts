import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateEventoDTO, UpdateEventoDTO } from './dtos/eventos.js';

@Injectable()
export class EventosService {
  constructor(private prismaService: PrismaService) {}

  ///
  async create(data: CreateEventoDTO) {
    return await this.prismaService.prisma.Eventos.create(data);
  }

  ///
  async list() {
    return await this.prismaService.prisma.Eventos.all();
  }

  ///
  async findById(id: number) {
    const evento = await this.prismaService.prisma.Eventos.first({ id });

    if (!evento) {
      throw new NotFoundException('Evento não encontrado');
    }

    return evento;
  }

  ///
  async update(id: number, data: UpdateEventoDTO) {
    await this.findById(id);

    return await this.prismaService.prisma.Eventos
      .where({ id })
      .update(data);
  }

  ///
  async delete(id: number) {
    await this.findById(id);

    await this.prismaService.prisma.Eventos
      .where({ id })
      .delete();

    return {
      message: 'Evento removido com sucesso',
    };
  }
}
