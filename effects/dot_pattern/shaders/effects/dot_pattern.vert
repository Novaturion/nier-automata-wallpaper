
uniform mat4 g_ModelViewProjectionMatrix;
uniform mat4 g_EffectModelViewProjectionMatrix;

attribute vec3 a_Position;
attribute vec2 a_TexCoord;

varying vec2 v_ScreenPosition;

void main() {
	const vec4 position = vec4(a_Position, 1.0);

	gl_Position = mul(position, g_ModelViewProjectionMatrix);

	vec2 layerPosition = mul(position, g_EffectModelViewProjectionMatrix).xy;
	// map from layer space [-1,1] to screen space [0,1]
	v_ScreenPosition = (layerPosition.xy + 1.0) * 0.5;
	v_ScreenPosition = vec2(v_ScreenPosition.x, 1.0 - v_ScreenPosition.y);

}
