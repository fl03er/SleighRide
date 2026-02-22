uniform float uTime;
uniform vec3 uColorBase; 
uniform vec3 uColorRim;  

varying vec3 vPosition;
varying vec3 vRandom;
varying float vNoise; 

void main() {
    float dist = distance(gl_PointCoord, vec2(0.5));
    float strength = 0.05 / dist - 0.1;
    strength = clamp(strength, 0.0, 1.0); 
    float alpha = strength * 1.0; 

    float distanceToCenter = length(vPosition.xz);
    
    vec3 coreColor = vec3(1.0, 0.9, 0.8); 
    vec3 armColor = mix(uColorRim, vec3(1.0, 0.4, 0.1), vNoise * 0.5); 

    float mixFactor = smoothstep(2.0, 15.0, distanceToCenter + vNoise * 2.0);
    vec3 finalColor = mix(coreColor, armColor, mixFactor);

    float edgeFactor = smoothstep(15.0, 35.0, distanceToCenter);
    finalColor = mix(finalColor, uColorBase, edgeFactor);

    if (vRandom.z > 0.98) { 
        finalColor = vec3(1.5, 1.5, 1.5); 
        alpha = strength * (0.8 + sin(uTime * 0.3 + vRandom.x * 15.0) * 0.5); 
    }

    gl_FragColor = vec4(finalColor, alpha);
}