import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateJogoColetivoDTO, UpdateJogoColetivoDTO } from './dtos/jogoscoletivos.js';

@Injectable()
export class JogosColetivosService {
  constructor(private prismaService: PrismaService) {}

  ///
  async create(data: CreateJogoColetivoDTO) {
    return await this.prismaService.prisma.JogosColetivos.create(data);
  }

  ///
  async list() {
    return await this.prismaService.prisma.JogosColetivos.all();
  }

  ///
  async findById(id: number) {
    const jogocoletivo = await this.prismaService.prisma.JogosColetivos.first({ id });

    if (!jogocoletivo) {
      throw new NotFoundException('Jogo coletivo não encontrado');
    }

    return jogocoletivo;
  }

  ///
  async update(id: number, data: UpdateJogoColetivoDTO) {
    await this.findById(id);

    return await this.prismaService.prisma.JogosColetivos
      .where({ id })
      .update(data);
  }

  ///
  async delete(id: number) {
    await this.findById(id);

    await this.prismaService.prisma.JogosColetivos
      .where({ id })
      .delete();

    return {
      message: 'Jogo coletivo removido com sucesso',
    };
  }
}
