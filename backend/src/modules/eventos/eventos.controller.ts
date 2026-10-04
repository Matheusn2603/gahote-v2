import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post,} from '@nestjs/common';
import { EventosService } from './eventos.service.js';
import { CreateEventoDTO, UpdateEventoDTO } from './dtos/eventos.js';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @Post()
  criar(@Body() data: CreateEventoDTO) {
    return this.eventosService.create(data);
  }

  @Get()
  listar() {
    return this.eventosService.list();
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.eventosService.findById(id);
  }

  @Patch(':id')
  atualizar(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateEventoDTO,) {
    return this.eventosService.update(id, data);
  }

  @Delete(':id')
  remover(@Param('id', ParseIntPipe) id: number) {
    return this.eventosService.delete(id);
  }
}