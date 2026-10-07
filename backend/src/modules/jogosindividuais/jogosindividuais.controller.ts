import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post,} from '@nestjs/common';
import { JogosIndividuaisService } from './jogosindividuais.service.js';
import { CreateJogoIndividualDTO, UpdateJogoIndividualDTO } from './dtos/jogosindividuais.js';

@Controller('jogosindividuais')
export class JogosIndividuaisController {
  constructor(private readonly JogosIndividuaisService: JogosIndividuaisService) {}

  @Post()
  create(@Body() data: CreateJogoIndividualDTO) {
    return this.JogosIndividuaisService.create(data);
  }

  @Get()
  list() {
    return this.JogosIndividuaisService.list();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.JogosIndividuaisService.findById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateJogoIndividualDTO,) {
    return this.JogosIndividuaisService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.JogosIndividuaisService.delete(id);
  }
}