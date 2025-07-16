
uniform float u_DotRadius; // {"material":"Dot Radius","default":0.02,"range":[0,100]}
uniform float u_DotSpacing; // {"material":"Dot Spacing","default":4,"range":[1,100]}
uniform float u_DotBlurAmount; // {"material":"Dot Blur Amount","default":0.005,"range":[0,1]}

uniform vec3 u_DotColor; // {"material":"Dot Color","type":"color","default":"0.73 0.71 0.64"}
uniform vec3 u_BackgroundColor; // {"material":"Background Color","type":"color","default":"0.67 0.65 0.58"}

uniform vec2 g_TexelSize;

varying vec2 v_ScreenPosition;

void main() {
	const float blurAmount = u_DotBlurAmount / 1000;
	const float dotRadius = u_DotRadius / 1000;
	const float cellSize = dotRadius * u_DotSpacing;

	vec2 aspectRatio = g_TexelSize.yx/g_TexelSize.x;
	vec2 uv = (v_ScreenPosition - 0.5) * aspectRatio;

	vec2 gridCoord = uv / cellSize;
	vec2 cellCoord = (floor(gridCoord) + 0.5) * cellSize;
	float dist = distance(uv, cellCoord);

	float dotMask = smoothstep(dotRadius, dotRadius - blurAmount, dist);
	// float dotMask = smoothstep(u_DotRadius - blurAmount, u_DotRadius + blurAmount, dist);

	gl_FragColor = vec4(mix(u_BackgroundColor, u_DotColor, dotMask), 1.0);
}
