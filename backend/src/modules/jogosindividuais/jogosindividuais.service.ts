import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateJogoIndividualDTO, UpdateJogoIndividualDTO } from './dtos/jogosindividuais.js';

@Injectable()
export class JogosIndividuaisService {
  constructor(private prismaService: PrismaService) {}

  ///
  async create(data: CreateJogoIndividualDTO) {
    return await this.prismaService.prisma.JogosIndividuais.create(data);
  }

  ///
  async list() {
    return await this.prismaService.prisma.JogosIndividuais.all();
  }

  ///
  async findById(id: number) {
    const jogoindividual = await this.prismaService.prisma.JogosIndividuais.first({ id });

    if (!jogoindividual) {
      throw new NotFoundException('Jogo individual não encontrado');
    }

    return jogoindividual;
  }

  ///
  async update(id: number, data: UpdateJogoIndividualDTO) {
    await this.findById(id);

    return await this.prismaService.prisma.JogosIndividuais
      .where({ id })
      .update(data);
  }

  ///
  async delete(id: number) {
    await this.findById(id);

    await this.prismaService.prisma.JogosIndividuais
      .where({ id })
      .delete();

    return {
      message: 'Jogo individual removido com sucesso',
    };
  }
}
