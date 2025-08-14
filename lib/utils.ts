/**
 * Formats a file size in bytes to a human-readable string (KB, MB, GB)
 * @param bytes - The size in bytes
 * @param decimals - Number of decimal places to show (default: 2)
 * @returns A formatted string with the appropriate unit
 */
export function formatSize(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return '0 Bytes';
  if (bytes < 0) return 'Invalid size';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  
  // Determine the appropriate unit
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  // Calculate the value in the appropriate unit
  const value = bytes / Math.pow(k, i);
  
  // Format the value with the specified number of decimal places
  return `${parseFloat(value.toFixed(decimals))} ${sizes[i]}`;
}