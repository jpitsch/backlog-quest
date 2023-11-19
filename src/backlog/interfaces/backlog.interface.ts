import { Document, Types } from "mongoose";

import { Game } from "src/games/schemas/game.schema";

interface BacklogGame extends Document {
  readonly game: Game;
  readonly status: string;
  readonly timeSpent: number;
}

export interface Backlog extends Document {
  readonly name: string;
  readonly userId: number;
  readonly games: BacklogGame[];
}