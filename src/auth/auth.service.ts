import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientService } from 'src/client/client.service';

@Injectable()
export class AuthService {
    constructor(
        private clientService: ClientService,
        private jwtService: JwtService
    ) { }

    async signIn(email: string, pass: string): Promise<any> {
        const user = await this.clientService.findOneEmail(email);
        if (user?.password !== pass) {
            throw new UnauthorizedException
        }
        const payload = { sub: user.id, name: user.name };

        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}
