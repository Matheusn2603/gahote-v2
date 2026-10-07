import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateModalidadeDTO, UpdateModalidadeDTO } from './dtos/modalidades.js';

@Injectable()
export class ModalidadesService {
  constructor(private prismaService: PrismaService) {}

  ///
  async create(data: CreateModalidadeDTO) {
    return await this.prismaService.prisma.Modalidades.create(data);
  }

  ///
  async list() {
    return await this.prismaService.prisma.Modalidades.all();
  }

  ///
  async findById(id: number) {
    const modalidade = await this.prismaService.prisma.Modalidades.first({ id });

    if (!modalidade) {
      throw new NotFoundException('Modalidade não encontrada');
    }

    return modalidade;
  }

  ///
  async update(id: number, data: UpdateModalidadeDTO) {
    await this.findById(id);

    return await this.prismaService.prisma.Modalidades
      .where({ id })
      .update(data);
  }

  ///
  async delete(id: number) {
    await this.findById(id);

    await this.prismaService.prisma.Modalidades
      .where({ id })
      .delete();

    return {
      message: 'Modalidade removida com sucesso',
    };
  }
}
