import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post,} from '@nestjs/common';
import { ParticipantesService } from './participantes.service.js';
import { CreateParticipanteDTO, UpdateParticipanteDTO } from './dtos/participantes.js';

@Controller('participantes')
export class ParticipantesController {
  constructor(private readonly ParticipantesService: ParticipantesService) {}

  @Post()
  create(@Body() data: CreateParticipanteDTO) {
    return this.ParticipantesService.create(data);
  }

  @Get()
  list() {
    return this.ParticipantesService.list();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.ParticipantesService.findById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateParticipanteDTO,) {
    return this.ParticipantesService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.ParticipantesService.delete(id);
  }
}