import { bootstrapApplication } from '@angular/platform-browser';
import { Tabela } from './app/tabela/tabela.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(Tabela, config);

export default bootstrap;
