import { Mongoose } from 'mongoose';
import { GameSchema } from './schemas/game.schema';

export const gamesProviders = [
  {
    provide: 'GAME_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Game', GameSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
