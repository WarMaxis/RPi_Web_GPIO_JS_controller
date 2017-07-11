import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'orderBy'})
export class OrderByPipe implements PipeTransform {
    transform(obj: any, orderFields: string): any {
            var orderType = 'ASC';

            if (orderFields[0] === '-') {
                orderFields = orderFields.substring(1);
                orderType = 'DESC';
            }

            obj.sort(function(a, b) {
                if (orderType === 'ASC') {
                    if (a[orderFields] < b[orderFields]) return -1;
                    if (a[orderFields] > b[orderFields]) return 1;
                    return 0;
                } else {
                    if (a[orderFields] < b[orderFields]) return 1;
                    if (a[orderFields] > b[orderFields]) return -1;
                    return 0;
                }
            });
        return obj;
    }
}
