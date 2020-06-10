import { Component, OnInit } from '@angular/core';
import { PropertyApiService } from 'src/app/services/property/property-api.service';

interface Property {
  approveStatus: string
  availabilityStatus : boolean
  area: number
  city: String
  district: String
  floors: number
  house: number
  location: String
  owner: String
  rooms: number
  type: String
}

@Component({
  selector: 'app-all-property',
  templateUrl: './all-property.component.html',
  styleUrls: ['./all-property.component.scss']
})
export class AllPropertyComponent implements OnInit {
  properties: Property[];
  rentals: Property[];
  sales: Property[];
  searchValue: string = '';
  visible: boolean = false;
  displaySales : Property[];

  constructor(
    private propertyService : PropertyApiService
  ) { }

  ngOnInit() {

    this.propertyService.getProperty().subscribe((properties : Property[])=>{
      this.properties = properties
      this.rentals = this.properties.filter((property)=>{
        return property.type == 'rentals' && property.approveStatus == 'approved'
      })
      this.sales = this.properties.filter((property)=>{
        return property.type == 'sales' && property.approveStatus == 'approved'
      })
      this.displaySales = [...this.sales]
    })
  }
  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.displaySales = this.sales.filter((property: Property) => property.location.indexOf(this.searchValue) !== -1);
  }

}
