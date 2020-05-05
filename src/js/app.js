export default function healthState(unit) {
  const currentHealth = unit.health;
  let currenState;
  if (currentHealth > 50) {
    currenState = 'healthy';
  }
  if (currentHealth >= 15 && currentHealth <= 50) {
    currenState = 'wounded';
  }
  if (currentHealth < 15) {
    currenState = 'critical';
  }
  return currenState;
}
