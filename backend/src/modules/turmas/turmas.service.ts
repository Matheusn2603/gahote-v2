import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateTurmaDTO, UpdateTurmaDTO } from './dtos/turmas.js';

@Injectable()
export class TurmasService {
  constructor(private prismaService: PrismaService) {}

  ///
  async create(data: CreateTurmaDTO) {
    return await this.prismaService.prisma.Turmas.create(data);
  }

  ///
  async list() {
    return await this.prismaService.prisma.Turmas.all();
  }

  ///
  async findById(id: number) {
    const turma = await this.prismaService.prisma.Turmas.first({ id });

    if (!turma) {
      throw new NotFoundException('Modalidade não encontrada');
    }

    return turma;
  }

  ///
  async update(id: number, data: UpdateTurmaDTO) {
    await this.findById(id);

    return await this.prismaService.prisma.Turmas
      .where({ id })
      .update(data);
  }

  ///
  async delete(id: number) {
    await this.findById(id);

    await this.prismaService.prisma.Turmas
      .where({ id })
      .delete();

    return {
      message: 'Turma removida com sucesso',
    };
  }
}
