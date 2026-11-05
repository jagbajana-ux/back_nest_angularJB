#  Instalacion 
```
npm i --save @nestjs/jwt passport-jwt bcrypt
npm i --save-dev @types/passport-jwt
npm i --save class-validator class-transformer
```

# Arrancamos proyecto
```
npm run start:dev
```
# Modules  & Resource
```
nest g mo modules/auth
nest g res modules/users
```
# Controllers & Services
```
nest g co modules/auth
nest g s modules/auth
```
# DTO 
```
Dentro de auth creamos la carpeta dto con dos archivos:
login-auth.dto.ts (valida el login)
register-auth.dto.ts (valida el registro)
```
# Interface
```
Dentro de auth creamos la carpeta interfaces con el archivo user.interface.ts
```
# Validaciones

```
En login-auth.dto.ts:
* email: @IsNotEmpty y @IsEmail
* password: @IsNotEmpty, @MinLength(6) y @MaxLength(25)
```
# Activar validaciones
```
En main.ts agregamos app.useGlobalPipes(new ValidationPipe)
```
# Ruta register
```
En auth.controller.ts creamos la ruta POST auth/register que recibe los datos en el Body con el RegisterAuthDto
```