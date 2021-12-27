export function sinInterpolate(amplitude: number, progress: number, max: number) {
    return amplitude * Math.sin(Math.PI * (progress / max));
}