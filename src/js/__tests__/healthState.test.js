import healthState from '../app';

describe('healthState:', () => {
  test('should return "healthy" if current health from 51 to 100', () => {
    const result = healthState({ name: 'Маг', health: 90 });
    expect(result).toBe('healthy');
  });
  test('should return "wounded" if current health from 15 to 50', () => {
    const result = healthState({ name: 'лучник', health: 45 });
    expect(result).toBe('wounded');
  });
  test('should return "critical" if current health from 0 to 14', () => {
    const result = healthState({ name: 'Рыцарь', health: 14 });
    expect(result).toBe('critical');
  });
  test('should return "wounded" if current health is 50', () => {
    const result = healthState({ name: 'Рыцарь', health: 50 });
    expect(result).toBe('wounded');
  });
  test('should return "wounded" if current health is 15', () => {
    const result = healthState({ name: 'Рыцарь', health: 15 });
    expect(result).toBe('wounded');
  });
});
