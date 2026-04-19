import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface BillItem {
  name: string;
  price: number;
}

interface BillData {
  customerName: string;
  items: BillItem[];
}

@Component({
  selector: 'app-pdf-generator',
  standalone: false,
  templateUrl: './pdf-generator.html',
  styleUrl: './pdf-generator.css',
})
export class PdfGenerator {
  billData: BillData = {
    customerName: 'John Doe',
    items: [
      { name: 'Item 1', price: 100 },
      { name: 'Item 2', price: 250 }
    ]
  };

  generatePDF() {
    const doc = new jsPDF();
    doc.text(`Invoice for ${this.billData.customerName}`, 10, 10);

    autoTable(doc, {
      head: [['Item', 'Price']],
      body: this.billData.items.map((item) => [item.name, item.price]),
    });

    doc.save('bill.pdf');
  }
}
