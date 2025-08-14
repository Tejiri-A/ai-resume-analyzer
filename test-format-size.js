// Simple test script for the formatSize function
// This is just for testing and can be deleted after verification

// Mock implementation of the formatSize function (same as in utils.ts)
function formatSize(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  if (bytes < 0) return 'Invalid size';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const value = bytes / Math.pow(k, i);
  
  return `${parseFloat(value.toFixed(decimals))} ${sizes[i]}`;
}

// Test cases
const testCases = [
  { input: 0, expected: '0 Bytes' },
  { input: -100, expected: 'Invalid size' },
  { input: 500, expected: '500 Bytes' },
  { input: 1023, expected: '1023 Bytes' },
  { input: 1024, expected: '1 KB' },
  { input: 1500, expected: '1.46 KB' },
  { input: 1024 * 1024, expected: '1 MB' },
  { input: 1.5 * 1024 * 1024, expected: '1.5 MB' },
  { input: 1024 * 1024 * 1024, expected: '1 GB' },
  { input: 20 * 1024 * 1024, expected: '20 MB' }, // Max file size in FileUploader
];

// Run tests
console.log('Testing formatSize function:');
testCases.forEach(({ input, expected }) => {
  const result = formatSize(input);
  const passed = result === expected;
  console.log(`Input: ${input} bytes → Result: "${result}" → ${passed ? 'PASSED' : `FAILED (Expected: "${expected}")`}`);
});