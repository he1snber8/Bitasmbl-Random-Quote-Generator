// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  quote: any;
  constructor(private qs: QuoteService) {}
  ngOnInit() { this.load(); }
  load() { this.qs.getQuote().subscribe(q => this.quote = q); }
} 