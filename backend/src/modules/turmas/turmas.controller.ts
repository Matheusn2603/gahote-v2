import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post,} from '@nestjs/common';
import { TurmasService } from './turmas.service.js';
import { CreateTurmaDTO, UpdateTurmaDTO } from './dtos/turmas.js';

@Controller('turmas')
export class TurmasController {
  constructor(private readonly TurmasService: TurmasService) {}

  @Post()
  create(@Body() data: CreateTurmaDTO) {
    return this.TurmasService.create(data);
  }

  @Get()
  list() {
    return this.TurmasService.list();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.TurmasService.findById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateTurmaDTO,) {
    return this.TurmasService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.TurmasService.delete(id);
  }
}