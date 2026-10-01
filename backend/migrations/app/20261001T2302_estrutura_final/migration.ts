#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/0d60c8c8f273f38c3ae51484f6a3c1df0b6ed91bbd3c241e849170d9be420811/contract';
import endContract from '../../snapshots/0d60c8c8f273f38c3ae51484f6a3c1df0b6ed91bbd3c241e849170d9be420811/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/91e7f9f035806fa2789a4d726ef7724cad434fd6b00014d47ebf12d6e6bb784e/contract';
import startContract from '../../snapshots/91e7f9f035806fa2789a4d726ef7724cad434fd6b00014d47ebf12d6e6bb784e/contract.json' with { type: 'json' };
import {
  Migration,
  MigrationCLI,
  checkExpression,
  col,
  lit,
  primaryKey,
} from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.dropTable({ schema: 'public', table: 'Post' }),
      this.dropTable({ schema: 'public', table: 'User' }),
      this.createTable({
        schema: 'public',
        table: 'Eventos',
        columns: [
          col('data', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nome', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'JogosColetivos',
        columns: [
          col('date', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('id_ganhador', 'int4', { codecRef: { codecId: 'pg/int4@1' } }),
          col('id_turma_01', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('id_turma_02', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('modalidadeId', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'JogosIndividuais',
        columns: [
          col('data', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('id_ganhador', 'int4', { codecRef: { codecId: 'pg/int4@1' } }),
          col('id_participante_01', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('id_participante_02', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('modalidadeId', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'Modalidades',
        columns: [
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nome', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('pontos', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'Moderador',
        columns: [
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('login', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('senha', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'Participantes',
        columns: [
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nome', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('turmaId', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'Turmas',
        columns: [
          col('curso', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('nome', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('serie', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('turno', 'text', {
            notNull: true,
            default: lit('MATUTINO'),
            codecRef: { codecId: 'pg/text@1' },
          }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression(
            'Turmas_curso_check_de65aa30',
            "\"curso\" IN ('INFORMÁTICA', 'MINERAÇÃO')",
          ),
          checkExpression('Turmas_turno_check_376a0f2d', "\"turno\" IN ('MATUTINO', 'VESPERTINO')"),
        ],
      }),
      this.addUnique({
        schema: 'public',
        table: 'Moderador',
        constraint: 'Moderador_login_key',
        columns: ['login'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'JogosColetivos',
        index: 'JogosColetivos_id_ganhador_idx_f2baa3c7',
        columns: ['id_ganhador'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'JogosColetivos',
        index: 'JogosColetivos_id_turma_01_idx_28888e28',
        columns: ['id_turma_01'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'JogosColetivos',
        index: 'JogosColetivos_id_turma_02_idx_c49a8736',
        columns: ['id_turma_02'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'JogosColetivos',
        index: 'JogosColetivos_modalidadeId_idx_66444aed',
        columns: ['modalidadeId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'JogosIndividuais',
        index: 'JogosIndividuais_id_ganhador_idx_f2baa3c7',
        columns: ['id_ganhador'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'JogosIndividuais',
        index: 'JogosIndividuais_id_participante_01_idx_403261a7',
        columns: ['id_participante_01'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'JogosIndividuais',
        index: 'JogosIndividuais_id_participante_02_idx_db9d20ae',
        columns: ['id_participante_02'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'JogosIndividuais',
        index: 'JogosIndividuais_modalidadeId_idx_66444aed',
        columns: ['modalidadeId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'Participantes',
        index: 'Participantes_turmaId_idx_4f1eb1a9',
        columns: ['turmaId'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'JogosColetivos',
        foreignKey: {
          name: 'JogosColetivos_modalidadeId_fkey',
          columns: ['modalidadeId'],
          references: { schema: 'public', table: 'Modalidades', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'JogosColetivos',
        foreignKey: {
          name: 'JogosColetivos_id_turma_01_fkey',
          columns: ['id_turma_01'],
          references: { schema: 'public', table: 'Turmas', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'JogosColetivos',
        foreignKey: {
          name: 'JogosColetivos_id_turma_02_fkey',
          columns: ['id_turma_02'],
          references: { schema: 'public', table: 'Turmas', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'JogosColetivos',
        foreignKey: {
          name: 'JogosColetivos_id_ganhador_fkey',
          columns: ['id_ganhador'],
          references: { schema: 'public', table: 'Turmas', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'JogosIndividuais',
        foreignKey: {
          name: 'JogosIndividuais_modalidadeId_fkey',
          columns: ['modalidadeId'],
          references: { schema: 'public', table: 'Modalidades', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'JogosIndividuais',
        foreignKey: {
          name: 'JogosIndividuais_id_participante_01_fkey',
          columns: ['id_participante_01'],
          references: { schema: 'public', table: 'Participantes', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'JogosIndividuais',
        foreignKey: {
          name: 'JogosIndividuais_id_participante_02_fkey',
          columns: ['id_participante_02'],
          references: { schema: 'public', table: 'Participantes', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'JogosIndividuais',
        foreignKey: {
          name: 'JogosIndividuais_id_ganhador_fkey',
          columns: ['id_ganhador'],
          references: { schema: 'public', table: 'Participantes', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'Participantes',
        foreignKey: {
          name: 'Participantes_turmaId_fkey',
          columns: ['turmaId'],
          references: { schema: 'public', table: 'Turmas', columns: ['id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
