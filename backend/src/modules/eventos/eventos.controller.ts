import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post,} from '@nestjs/common';
import { EventosService } from './eventos.service.js';
import { CreateEventoDTO, UpdateEventoDTO } from './dtos/eventos.js';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  @Post()
  create(@Body() data: CreateEventoDTO) {
    return this.eventosService.create(data);
  }

  @Get()
  list() {
    return this.eventosService.list();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.eventosService.findById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateEventoDTO,) {
    return this.eventosService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.eventosService.delete(id);
  }
}