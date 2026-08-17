import { Controller, Get } from '@nestjs/common';

@Controller('tickets')
export class TicketsController {
    @Get()
    listarChamados() {
        return 'Lista de chamados'
    }
}
