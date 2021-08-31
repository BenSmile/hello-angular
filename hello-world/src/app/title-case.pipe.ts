import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (!value) {
      return null;
    }
    const prepositions = ['of', 'the', 'an', 'up'];

    const words = value.split(' ');

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < words.length; i++) {
      if (i > 0 && prepositions.includes(words[i].toLowerCase())) {
        words[i] = words[i].toLowerCase();
      } else {
        words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1).toLowerCase();
      }
    }
    return words.join(' ');
  }

  private isPreposition(word: string): boolean {
    const prepositions = ['of', 'the', 'an', 'up'];
    return prepositions.includes(word.toLowerCase());
  }

  private toTitleCase(value: string): string {
    return value.substr(0, 1).toUpperCase() + value.substr(1).toLowerCase();
  }

}
