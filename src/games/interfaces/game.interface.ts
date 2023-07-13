import { Document } from "mongoose";

export interface Game extends Document {
  readonly name: string;
  readonly genre: string;
  readonly platform: string;
  readonly publisher: string;
  readonly boxImage: string;
  readonly metacriticScore: number;
  readonly storyOnly: number;
  readonly storyPlus: number;
  readonly fullCompletion: number;
  readonly steamAppId: number;
  readonly playstationId: string;
  readonly nintendoId: string;
  readonly xboxId: string;
}
