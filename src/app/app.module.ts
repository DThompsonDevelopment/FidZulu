import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { ReplaceUnderscoresPipe } from './pipes/replace-underscores.pipe';
import { FormsModule } from '@angular/forms';
import { TeamComponent } from './components/team/team.component';

@NgModule({
  declarations: [AppComponent, TableComponent, ReplaceUnderscoresPipe, TeamComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
