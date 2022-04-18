import { ReplaceUnderscoresPipe } from './replace-underscores.pipe';

describe('ReplaceUnderscoresPipe', () => {
  it('create an instance', () => {
    const pipe = new ReplaceUnderscoresPipe();
    expect(pipe).toBeTruthy();
  });

  it('removes underscores at beginning', () => {
    const pipe = new ReplaceUnderscoresPipe();
    expect(pipe.transform('_a')).toBe('a');
  });

  it('removes underscores at end', () => {
    const pipe = new ReplaceUnderscoresPipe();
    expect(pipe.transform('a_')).toBe('a');
  });

  it('removes underscores at middle', () => {
    const pipe = new ReplaceUnderscoresPipe();
    expect(pipe.transform('a_a')).toBe('a a');
  });
});
