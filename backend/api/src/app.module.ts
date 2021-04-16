import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { MachineProductsController } from './machine-products/machine-products.controller';
import { MachinesController } from './machines/machines.controller';
import { MachinesService } from './machines/machines.service';
import { UsersService } from './users/users.service';
import { MachineProductsModule } from './machine-products/machine-products.module';
import { MachinesModule } from './machines/machines.module';
import { UsersModule } from './users/users.module';
import { MachineProductsService } from './machine-products/machine-products.service';
import { FilesController } from './files/files.controller';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.localhost'],
    }),
    MachineProductsModule,
    UsersModule,
    MachinesModule,
    AuthModule,
    MailerModule.forRootAsync({
      useFactory: () => ({
        transport: {
          host: 'smtp.gmail.com',
          port: 465,
          auth: {
            user: process.env.SMTP_GMAIL_USER,
            pass: process.env.SMTP_GMAIL_PASS, // naturally, replace both with your real credentials or an application-specific password
          },
        },
        defaults: {
          from:
            '"Drinking Vending Machine" <NotReply@drinkingVendingMachine.com>',
        },
        template: {
          dir: __dirname + '/templates',
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  controllers: [
    AppController,
    UsersController,
    MachineProductsController,
    MachinesController,
    FilesController,
    AuthController,
  ],
  providers: [
    AppService,
    MachinesService,
    UsersService,
    MachineProductsService,
    AuthService,
  ],
})
export class AppModule {}
