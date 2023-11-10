import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BacklogService } from './backlog.service';
import { BacklogController } from './backlog.controller';
import { Backlog, BacklogSchema } from './schemas/backlog.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Backlog.name, schema: BacklogSchema}])
  ],
  providers: [BacklogService],
  controllers: [BacklogController]
})
export class BacklogModule {}
