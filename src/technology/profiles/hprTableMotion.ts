import type { TableMotion } from './TableMotion';

/**
 * Hypertherm HPR400XD table motion: field 411 "RAPID FEEDRATE AND ACCELERATION" of the SigmaNEST
 * post (1200 mm/min and 416.666 mm/s²). Post configuration, not a measurement of the table; the
 * in/min value of the same field (100) does not convert to the mm/min one, so the rapid speed is
 * the least reliable of the two.
 */
export const HPR400XD_TABLE_MOTION: TableMotion = Object.freeze({
  rapidSpeed: 1200,
  accelerationMmPerSec2: 416.666
});
