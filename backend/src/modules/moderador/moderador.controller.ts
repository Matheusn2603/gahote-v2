import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post,} from '@nestjs/common';
import { ModeradorService } from './moderador.service.js';
import { CreateModeradorDTO, UpdateModeradorDTO } from './dtos/moderador.js';

@Controller('moderador')
export class ModeradorController {
  constructor(private readonly ModeradorService: ModeradorService) {}

  @Post()
  create(@Body() data: CreateModeradorDTO) {
    return this.ModeradorService.create(data);
  }

  @Get()
  list() {
    return this.ModeradorService.list();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.ModeradorService.findById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateModeradorDTO,) {
    return this.ModeradorService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.ModeradorService.delete(id);
  }
}