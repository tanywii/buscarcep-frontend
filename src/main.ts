import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Tabela } from './app/tabela/tabela.component';

bootstrapApplication(Tabela, appConfig)
  .catch((err) => console.error(err));
