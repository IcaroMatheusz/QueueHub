import { Injectable } from '@nestjs/common';

@Injectable()
export class StatusService {

    responderStatus() {
        return {
            status: 'Ok',
            message: 'Servidor funcionando corretamente'
        }
    }
}
