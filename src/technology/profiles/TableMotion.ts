/** Table motion of a machine post, in the units the calculator uses. */
export interface TableMotion {
  /** Rapid positioning speed, mm/min. */
  readonly rapidSpeed: number;
  /** Table acceleration, mm/s². */
  readonly accelerationMmPerSec2: number;
}
