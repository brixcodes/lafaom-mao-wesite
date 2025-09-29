import { Component } from '@angular/core';
import { Header } from '../../components/formations/header/header';
import { Filters } from '../../components/formations/filters/filters';

@Component({
  selector: 'app-formations',
  imports: [Header, Filters],
  templateUrl: './formations.html',
  styleUrl: './formations.css'
})
export class Formations {

}
