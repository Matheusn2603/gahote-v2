import { Cursos, Turnos } from '../../../common/enums/enum.js';

export class CreateTurmaDTO {
  nome: string;
  turno: Turnos;
  serie: number;
  curso: Cursos;
}

export class UpdateTurmaDTO {
  nome?: string;
  turno?: Turnos;
  serie?: number;
  curso?: Cursos;
}
