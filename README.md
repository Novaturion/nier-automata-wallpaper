# Nier: Automata Wallpaper
This is the reworked version of the popular [NieR: Automata | Android Machine Robot | eggloaf](https://steamcommunity.com/sharedfiles/filedetails/?id=3002120692) wallpaper.

## Performance
Performance is recorded for 2 minutes using _Windows Task Manager_ and _GPU-Z_ with the same conditions (apps running, music, etc.).

CPU: AMD Ryzen 7 5800X<br>
GPU: GIGABYTE AORUS RTX 3070 MASTER Rev. 2.0<br>
OS: Windows 10 22H2<br>

| Sensor			| Old (avg.)	| New (avg.)	| Difference (%)	|
|-------------------|---------------|---------------|-------------------|
| CPU Clock (GHz)	| 4.19			| 4.20			| 0					|
| GPU Clock (MHz)	| 900			| 210*			| -428.6			|
| GPU Memory (Mb)	| 3242			| 2936			| -90.6				|

\*210 Mhz is the minimal clock I can get, so there's no load that can make GPU increase it

## Changes
- Video memory usage reduced by up to 7 times*
	- Unnecessary transparent pixels in textures have been removed
	- Texture count reduced through reusage where possible
- The number of draw calls has been reduced by 10
- Animations have been replaced with SceneScript scripts
- Auto scaling has been added for different screen resolutions
- Aspect ratio property has been included
- Additional properties have been introduced for users to customize

\*According to _Wallpaper Engine Editor_ active texture memory is reduced from 456 Mb to 62 Mb

## Credits
Art: [eggloaf](https://twitter.com/eggloaf/status/980451636303704065)<br>
Original wallpaper: [Frapp](https://www.reddit.com/user/_FrApPuCiNo_)
