interface FormatBytesOptions {
  numberOfDecimals: number;
}

/**
 * @description Formats bytes from a number to a formatted string showing the largest byte measurement unit
 * @example formatBytes(3200000000000) ===> "3.2 TB"
 * @param bytes - The number of bytes that are being converted
 * @param options - Options to pass to this function.
 * @returns A formatted number that ends in bytes, KB, MB, GB, TB, PB, EB, ZB, or YB
 */
export const formatBytes = (bytes: number, options?: Partial<FormatBytesOptions>): string => {
  const sizes = [`bytes`, `KB`, `MB`, `GB`, `TB`, `PB`, `EB`, `ZB`, `YB`];
  const { numberOfDecimals = 0 } = options ?? {};

  if (!bytes || bytes <= 0) return `0 bytes`;
  if (bytes === 1) return `1 byte`;

  const base = 1000;
  const exponent = ~~(Math.log(bytes) / Math.log(base));
  const rawValue = bytes / base ** exponent;
  let [whole, partial = ``] = rawValue.toString().split(`.`);

  if (numberOfDecimals > 0) {
    const count = numberOfDecimals - partial.length;
    if (count > 0) partial += `0`.repeat(count);
    whole += `.${partial.slice(0, numberOfDecimals)}`;
  }

  const abbreviationSuffix = sizes[exponent];

  return `${whole} ${abbreviationSuffix}`;
};

/**
 * @description Determines the appropriate amount of decimal places based on a number of bytes
 * @example formatDecimals(3200000000000) ===> 2
 * @param bytes The number of bytes that are being checked
 * @returns The number of appropriate decimal places
 */
export const formatDecimals = (bytes: number = 0): number => (bytes >= 1e9 ? 2 : 0);
