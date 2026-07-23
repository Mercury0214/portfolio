// Patch os.hostname() to return ASCII-only string before loading Vercel CLI
const os = require('os');
const originalHostname = os.hostname;
os.hostname = function() {
  const name = originalHostname.call(os);
  return name.replace(/[^\x00-\xFF]/g, 'X') || 'localhost';
};

// Load Vercel CLI entry point
require('C:/Users/86187/.workbuddy/binaries/node/workspace/node_modules/vercel/dist/vc.js');
