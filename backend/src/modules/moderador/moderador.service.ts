import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateModeradorDTO, UpdateModeradorDTO } from './dtos/moderador.js';

@Injectable()
export class ModeradorService {
  constructor(private prismaService: PrismaService) {}

  ///
  async create(data: CreateModeradorDTO) {
    return await this.prismaService.prisma.Moderador.create(data);
  }

  ///
  async list() {
    return await this.prismaService.prisma.Moderador.all();
  }

  ///
  async findById(id: number) {
    const moderador = await this.prismaService.prisma.Moderador.first({ id });

    if (!moderador) {
      throw new NotFoundException('Moderador não encontrado');
    }

    return moderador;
  }

  ///
  async update(id: number, data: UpdateModeradorDTO) {
    await this.findById(id);

    return await this.prismaService.prisma.Moderador
      .where({ id })
      .update(data);
  }

  ///
  async delete(id: number) {
    await this.findById(id);

    await this.prismaService.prisma.Moderador
      .where({ id })
      .delete();

    return {
      message: 'Moderador removido com sucesso',
    };
  }
}
