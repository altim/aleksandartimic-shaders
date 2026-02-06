varying float vElevation;
varying vec2 vUv;

void main() {
    // Adjust smoothstep range to better match elevation values
    float colorMix = smoothstep(-0.5, 0.5, vElevation);

    vec3 colorA = vec3(0.6, 0.6, 0.65); // Medium silver for dips
    vec3 colorB = vec3(0.98, 0.98, 1.0); // Bright white for peaks
    vec3 color = mix(colorA, colorB, colorMix);

    float distanceFromCenter = clamp(distance(vec2(0.5, 0.5), vUv) * 2., 0.0, 1.0);
    color = mix(color, vec3(0, 0, 0), distanceFromCenter);

    csm_DiffuseColor = vec4(color, 1.0 - distanceFromCenter);
    csm_Roughness = 1.0 - colorMix * 0.7;

}