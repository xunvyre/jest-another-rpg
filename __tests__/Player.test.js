const Player = require('../lib/Player');
const Potion = require ('../lib/Potion');
jest.mock('../lib/Potion');

test('creates a player object', () =>
{
    const player = new Player('Meatloaf');

    expect(player.name).toBe('Meatloaf');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
});

test('gets player stats as an object', () =>
{
    const player = new Player('Meatloaf');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test('gets inventory from player or returns false', () =>
{
    const player = new Player('Meatloaf');
    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = [];
    expect(player.getInventory()).toEqual(false);
});

test('gets player health value', () =>
{
    const player = new Player('Meatloaf');
    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
});

test('checks if player is alive for not', () =>
{
    const player = new Player('Meatloaf');
    expect(player.isAlive()).toBeTruthy();

    player.health = 0;
    expect(player.isAlive()).toBeFalsy();
});

test('subtracts from player health', () =>
{
    const player = new Player('Meatloaf');
    const oldHealth = player.health;

    player.reduceHealth(5);
    expect(player.health).toBe(oldHealth - 5);
    player.reduceHealth(9999);
    expect(player.health).toBe(0);
});