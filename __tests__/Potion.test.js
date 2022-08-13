//require the parent file
const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');

test('creates a health potion option', () =>
{
    const potion = new Potion('health');
    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
});

test('creates a random potion object', () =>
{
    const potion = new Potion();
    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});

console.log(new Potion());