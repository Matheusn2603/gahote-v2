import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post,} from '@nestjs/common';
import { JogosColetivosService } from './jogoscoletivos.service.js';
import { CreateJogoColetivoDTO, UpdateJogoColetivoDTO } from './dtos/jogoscoletivos.js';

@Controller('jogoscoletivos')
export class JogosColetivosController {
  constructor(private readonly JogosColetivosService: JogosColetivosService) {}

  @Post()
  create(@Body() data: CreateJogoColetivoDTO) {
    return this.JogosColetivosService.create(data);
  }

  @Get()
  list() {
    return this.JogosColetivosService.list();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.JogosColetivosService.findById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateJogoColetivoDTO,) {
    return this.JogosColetivosService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.JogosColetivosService.delete(id);
  }
}