import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post,} from '@nestjs/common';
import { ModalidadesService } from './modalidades.service.js';
import { CreateModalidadeDTO, UpdateModalidadeDTO } from './dtos/modalidades.js';

@Controller('modalidades')
export class ModalidadesController {
  constructor(private readonly ModalidadesService: ModalidadesService) {}

  @Post()
  create(@Body() data: CreateModalidadeDTO) {
    return this.ModalidadesService.create(data);
  }

  @Get()
  list() {
    return this.ModalidadesService.list();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.ModalidadesService.findById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateModalidadeDTO,) {
    return this.ModalidadesService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.ModalidadesService.delete(id);
  }
}