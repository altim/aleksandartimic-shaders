varying vec2 vUv;
varying float vElevation;
uniform float uTime;
uniform sampler2D uNoiseTexture;

void main() {
    // Layer multiple waves with different frequencies for organic variation
    float wave1 = sin(uv.x * 12.0 + uTime * 0.3) * cos(uv.y * 8.0 - uTime * 0.4);
    float wave2 = sin(uv.x * 7.0 - uTime * 0.25) * sin(uv.y * 15.0 + uTime * 0.35);
    float wave3 = cos((uv.x + uv.y) * 18.0 + uTime * 0.2);

    // Combine waves with different amplitudes
    float elevation = wave1 * 0.15 + wave2 * 0.12 + wave3 * 0.08;

    // Add noise from texture for organic texture
    vec2 noiseUV = position.xy * 0.3 + uTime * 0.01;
    float noise = texture2D(uNoiseTexture, noiseUV).r;
    // Remap from [0,1] to [-1,1] to match cnoise behavior
    noise = noise * 2.0 - 1.0;
    elevation += noise * 0.15;

    csm_Position.z += elevation;

    vUv = uv;
    vElevation = elevation;
}