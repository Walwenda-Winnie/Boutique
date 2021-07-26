import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sale } from '../sale';
import { SaleService } from '../sale.service';

@Component({
  selector: 'sa-create-sale',
  templateUrl: './create-sale.component.html',
  styleUrls: ['./create-sale.component.css']
})

export class CreateSaleComponent implements OnInit {


  
  sale: Sale= new Sale();

  constructor(private saleService: SaleService,
    private router: Router) { }

  ngOnInit(): void {

  }
  
  saveSale(){
    this.saleService.createSale(this.sale).subscribe(data=>{
      console.log(data);
      this.goToSaleList();

    },error=>console.log(error));
  }

  goToSaleList(){
    this.router.navigate(['/sales']);

  }
  onSubmit(){
    console.log(this.sale);
    this.saveSale();

  }
 
        var(){ let total=0;
        var tot=0;
        $(document).ready(function(){
            $("type[type='button']").click(function(){
            var radio1=$("input[name='itemName']:checked").val();
            var radio2=$("input[name='type']:checked").val();
            var price=null;
            if(radio1=="Jacket")
            {

                if(radio2=="leather")
                {
                    price=1000;
                }
                else if(radio2=="jeans")
                {
                    price=1500;
                }
                else if(radio2="long-sleeved")
                {
                    price=1000;
                }
            }
            else if (radio1=="Jeans Trouser")
            if (radio2=="leather")
            {
                price=2000;

            }
            else if(radio2=="jeans")
            {
                price=1000;
            }
            else if(radio2=="long-sleeved")
            {
                price=8000;
            }
        
        else if (radio1=="Shirt")
            {

                if(radio2=="leather")
                {
                    price=2000;
                }
                else if(radio2=="jeans")
                {
                    price=2500;
                }
                else if(radio2="long-sleeved")
                {
                    price=800;
                }
            }
            var qty=$('#qty').val();
            tot=qty * price;

            var table1=
            "<tr>"+
                "<td> <button type='button' name='record' class='btn btn-warning' onclick='deleterow(this)'>Delete"
                    "<td>" + radio1 + ""+radio2 +"</td>"+
                    "<td>" +price + "</td>"+
                    "<td>" + qty+"</td>"+
                    "<td>" + tot + "</td>" +
                    "</tr>";
                    total +=Number(tot);
                    $('#total').val(total);
                    $("table tbody").append(table1);



        });
    });
        
    

        function deleterow(e)
        {
            const total_cost=parseInt($(e).parent().parent().find('td:last').text,10);
            total-=total_cost;
            $('#total').val(total);
            $(e).parent().parent().remove();

        }
        $('#reset').click(function()
        {
            location.reload();
        }
        
        );
      


}
}
