export type SpaceName =
  | string
  | -64
  | -60
  | -56
  | -52
  | -48
  | -44
  | -40
  | -36
  | -32
  | -28
  | -24
  | -20
  | -16
  | -12
  | -8
  | -4
  | 0
  | 4
  | 8
  | 12
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 52
  | 56
  | 60
  | 64
  | 68
  | 72
  | 76
  | 80
  | 84
  | 88
  | 92
  | 96
  | 100
  | 104
  | 108
  | 112
  | 116
  | 120
  | 124
  | 128
  | 132
  | 136
  | 140
  | 144
  | 148
  | 152
  | 156
  | 160
  | 164
  | 168
  | 172
  | 176
  | 180
  | 184
  | 188
  | 192
  | 196
  | 200
  | 204
  | 208
  | 212
  | 216
  | 220
  | 224;

export const space: { [key in SpaceName]: number | string } = {
  [-64]: -64,
  [-60]: -60,
  [-56]: -56,
  [-52]: -52,
  [-48]: -48,
  [-44]: -44,
  [-40]: -40,
  [-36]: -36,
  [-32]: -32,
  [-28]: -28,
  [-24]: -24,
  [-20]: -20,
  [-16]: -16,
  [-12]: -12,
  [-8]: -8,
  [-4]: -4,
  0: 0,
  4: 4,
  8: 8,
  12: 12,
  16: 16,
  20: 20,
  24: 24,
  28: 28,
  32: 32,
  36: 36,
  40: 40,
  44: 44,
  48: 48,
  52: 52,
  56: 56,
  60: 60,
  64: 64,
  68: 68,
  72: 72,
  76: 76,
  80: 80,
  84: 84,
  88: 88,
  92: 92,
  96: 96,
  100: 100,
  104: 104,
  108: 108,
  112: 112,
  116: 116,
  120: 120,
  124: 124,
  128: 128,
  132: 132,
  136: 136,
  140: 140,
  144: 144,
  148: 148,
  152: 152,
  156: 156,
  160: 160,
  164: 164,
  168: 168,
  172: 172,
  176: 176,
  180: 180,
  184: 184,
  188: 188,
  192: 192,
  196: 196,
  200: 200,
  204: 204,
  208: 208,
  212: 212,
  216: 216,
  220: 220,
  224: 224,
};
