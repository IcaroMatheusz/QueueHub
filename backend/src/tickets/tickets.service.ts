import { Injectable } from '@nestjs/common';

@Injectable()
export class TicketsService {

    listarChamados() {
        return 'Lista de chamados'
    }
}
