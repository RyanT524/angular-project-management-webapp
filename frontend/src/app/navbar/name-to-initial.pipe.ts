import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameToInitial',
})
export class NameToInitialPipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      return `${value.slice(0, 1)}.`;
    }

    return '';
  }
}
