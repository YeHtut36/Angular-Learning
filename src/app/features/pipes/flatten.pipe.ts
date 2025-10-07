import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatten'
})
export class FlattenPipe implements PipeTransform {
  transform(value: any[]): any[] {
    return value.reduce((acc, val) => acc.concat(Array.isArray(val) ? this.transform(val) : val), []);
  }
}
