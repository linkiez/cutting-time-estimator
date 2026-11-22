import type { TableMotion } from './TableMotion';

/**
 * Talvi 6000 W table motion: field 411 "RAPID FEED&ACC" of the SigmaNEST post (26000 mm/min and
 * 200 mm/s²). The post repeats the values of the Glory Star template, so this is post
 * configuration, not a measurement of the Talvi table.
 */
export const TALVI_6000W_TABLE_MOTION: TableMotion = Object.freeze({
  rapidSpeed: 26000,
  accelerationMmPerSec2: 200
});
