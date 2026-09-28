import { Injectable } from '@nestjs/common';
import { prisma } from '../../prisma/db.js';

@Injectable()
export class PrismaService {
    public prisma = prisma;
}
