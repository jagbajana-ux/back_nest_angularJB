import { Body, Controller, Post } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto.js';

@Controller('auth')
export class AuthController {
    @Post('register')
    registrerUser(@Body()userObj : RegisterAuthDto){
        userObj.email
        userObj.name
    }
}
