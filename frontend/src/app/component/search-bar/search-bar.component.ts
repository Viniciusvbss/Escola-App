import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  searchQuery: string = '';
  onSearch() {
    //Aqui você pode implementar a lógica de busca, por exemplo, fazer uma chamada á API.
    console.log('Buscando por:', this.searchQuery);
  }
}
