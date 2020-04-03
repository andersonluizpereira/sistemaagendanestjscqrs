import { Module } from '@nestjs/common';
import { HeroesGameModule } from './heroes/heroes.module';
import { AgendaModule } from './agenda/agenda.module';

@Module({
  imports: [HeroesGameModule, AgendaModule],
})
export class ApplicationModule {}
