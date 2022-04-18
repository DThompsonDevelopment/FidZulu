import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { ReplaceUnderscoresPipe } from './pipes/replace-underscores.pipe';

@NgModule({
  declarations: [AppComponent, TableComponent, ReplaceUnderscoresPipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
