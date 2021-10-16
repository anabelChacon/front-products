import { DomSanitizer } from '@angular/platform-browser';
import { SafePipe } from './safe.pipe';

describe('SafePipe', () => {
  let domSanitizer: DomSanitizer;

  it('create an instance', () => {
    const pipe = new SafePipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });
});
