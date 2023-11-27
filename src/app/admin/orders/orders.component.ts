import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  tableData = [
    {id: "1,001", col1: "random", col2: "data", col3: "placeholder", col4: "text"},
    {id: "1,002", col1: "placeholder", col2: "irrelevant", col3: "visual", col4: "layout"},
    {id: "1,003", col1: "data", col2: "rich", col3: "dashboard", col4: "tabular"},
    {id: "1,003", col1: "information", col2: "placeholder", col3: "illustrative", col4: "data"},
    {id: "1,004", col1: "text", col2: "random", col3: "layout", col4: "dashboard"},
    {id: "1,005", col1: "dashboard", col2: "irrelevant", col3: "text", col4: "placeholder"},
    {id: "1,006", col1: "dashboard", col2: "illustrative", col3: "rich", col4: "data"},
    {id: "1,007", col1: "placeholder", col2: "tabular", col3: "information", col4: "irrelevant"},
    {id: "1,008", col1: "random", col2: "data", col3: "placeholder", col4: "text"},
    {id: "1,009", col1: "placeholder", col2: "irrelevant", col3: "visual", col4: "layout"},
    {id: "1,010", col1: "data", col2: "rich", col3: "dashboard", col4: "tabular"},
    {id: "1,011", col1: "information", col2: "placeholder", col3: "illustrative", col4: "data"},
    {id: "1,012", col1: "text", col2: "placeholder", col3: "layout", col4: "dashboard"},
    {id: "1,013", col1: "dashboard", col2: "irrelevant", col3: "text", col4: "visual"},
    {id: "1,014", col1: "dashboard", col2: "illustrative", col3: "rich", col4: "data"},
    {id: "1,015", col1: "random", col2: "tabular", col3: "information", col4: "text"}
  ];
}
