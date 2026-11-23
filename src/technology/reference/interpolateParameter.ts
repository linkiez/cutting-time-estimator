/**
 * Resolves a reference value, retaining interpolation/clamping unless the process uses discrete recipes.
 * @param table - Reference values indexed by thickness in mm.
 * @param thickness - Positive finite thickness in mm.
 * @param exactThicknessOnly - Discrete recipes are never blended: an unlisted thickness inside the
 *   tabulated range takes the recipe of the nearest listed thickness (the thicker one on a tie);
 *   outside the range it is rejected.
 * @returns Exact, nearest (discrete) or interpolated reference value.
 * @throws Error for invalid thickness or a discrete recipe outside the tabulated range.
 */
export function interpolateParameter(
  table: Readonly<Record<number, number>>, thickness: number, exactThicknessOnly = false
): number {
  if (!Number.isFinite(thickness) || thickness <= 0) {
    throw new Error('Espessura deve ser um número positivo e finito');
  }
  const keys = Object.keys(table).map(Number).sort((a, b) => a - b);
  if (exactThicknessOnly) return table[nearestThickness(keys, thickness)];
  if (thickness <= keys[0]) return table[keys[0]];
  for (let i = 1; i < keys.length; i++) {
    if (thickness <= keys[i]) {
      const lower = keys[i - 1];
      const ratio = (thickness - lower) / (keys[i] - lower);
      return table[lower] + ratio * (table[keys[i]] - table[lower]);
    }
  }
  return table[keys[keys.length - 1]];
}

/**
 * Picks the listed thickness closest to the requested one, preferring the thicker on a tie.
 * @param keys - Listed thicknesses in mm, ascending.
 * @param thickness - Positive finite thickness in mm.
 * @returns The listed thickness whose recipe applies.
 * @throws Error when the thickness is outside the listed range.
 */
function nearestThickness(keys: readonly number[], thickness: number): number {
  const min = keys[0];
  const max = keys[keys.length - 1];
  if (thickness < min || thickness > max) {
    throw new Error(
      `Espessura ${thickness} mm fora da faixa tabelada (${min} a ${max} mm); informe os parâmetros da receita`
    );
  }
  return keys.reduce((best, key) => {
    const distance = Math.abs(key - thickness);
    const bestDistance = Math.abs(best - thickness);
    return distance < bestDistance || (distance === bestDistance && key > best) ? key : best;
  });
}
