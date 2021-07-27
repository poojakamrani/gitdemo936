import {Pipe,PipeTransform} from '@angular/core'

@Pipe(
    {
        name:'productfilterpipe'//giving name to pipe
    }
)
export class Productfilterpipe implements PipeTransform
{
    transform(products:any,searchtext:any)
    {
        if(searchtext)
        {
        
            return products.filter((x:any)=>x.pname.toLowerCase().startsWith(searchtext.toLowerCase()));
          //return products
        }
    }
}