import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { DatabaseModule } from 'src/database/database.module';
import { Game, GameSchema } from './schemas/game.schema';
import { GamesResolver } from './games.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Game.name, schema: GameSchema }]),
  ],
  providers: [
    GamesResolver,
    GamesService,
  ],
  controllers: [GamesController]
})
export class GamesModule {}
