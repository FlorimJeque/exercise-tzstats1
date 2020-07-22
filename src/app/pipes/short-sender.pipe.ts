import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortSender',
})
export class ShortSenderPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value.length === 0) {
      return '';
    }
    return `${value.substring(0, 2)}...${value.substring(
      value.length - 6,
      value.length - 1
    )}`;
  }
}
