// Preload script: patches os.hostname() to return ASCII-only string
// This fixes Vercel CLI crashing on Windows machines with non-ASCII hostnames
const os = require('os');
const original = os.hostname;
os.hostname = function() {
  const name = original.call(os);
  return name.replace(/[^\x00-\xFF]/g, 'X') || 'localhost';
};
