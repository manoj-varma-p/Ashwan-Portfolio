// Sound engine disabled - completely silent

export type SoundType =
  | "tick"
  | "click"
  | "glassTap"
  | "whoosh"
  | "impact"
  | "bassDrop"
  | "shutter"
  | "chime"
  | "callAccept"
  | "reveal"
  | "typewriter"
  | "pop";

export type HapticType = "light" | "medium" | "heavy" | "success" | "shutter";

class SoundEngine {
  constructor() {
    // Sound completely disabled
  }

  public initAudio() {
    // No-op
  }

  public play(_sound: SoundType) {
    // No-op: Completely silent
  }

  public triggerHaptic(_type: HapticType = "light") {
    // No-op
  }

  public feedback(_sound: SoundType, _haptic: HapticType = "light") {
    // No-op: Completely silent
  }

  public toggleMute(): boolean {
    return false;
  }

  public getSoundEnabled(): boolean {
    return false;
  }
}

// Export singleton
export const soundFX = new SoundEngine();
