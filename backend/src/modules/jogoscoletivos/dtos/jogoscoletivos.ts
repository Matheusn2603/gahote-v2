export class CreateJogoColetivoDTO {
  modalidadeId: number;
  id_turma_01: number;
  id_turma_02: number;
  id_ganhador?: number;
  date: Date;
}

export class UpdateJogoColetivoDTO {
  modalidadeId?: number;
  id_turma_01?: number;
  id_turma_02?: number;
  id_ganhador?: number;
  date?: Date;
}
