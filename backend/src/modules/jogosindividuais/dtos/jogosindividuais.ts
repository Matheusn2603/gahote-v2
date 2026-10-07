export class CreateJogoIndividualDTO {
  modalidadeId: number;
  id_participante_01: number;
  id_participante_02: number;
  id_ganhador?: number;
  data: Date;
}

export class UpdateJogoIndividualDTO {
  modalidadeId?: number;
  id_participante_01?: number;
  id_participante_02?: number;
  id_ganhador?: number;
  data?: Date;
}