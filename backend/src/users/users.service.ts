import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    listarUsuarios() {
        return 'Lista de usuários'
    }
}
