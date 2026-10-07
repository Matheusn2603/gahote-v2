export class CreateParticipanteDTO {
  nome: string;
  turmaId: number;
}

export class UpdateParticipanteDTO {
  nome?: string;
  turmaId?: number;
}
