let config;

async function ensureConfig() {
   if (config == null) {
      config = {};
   }
}

async function get(key, defaultValue = null) {
   await ensureConfig();
   return config[key] || defaultValue;
}

async function set(key, value) {
   await ensureConfig();
   if (value == null) {
      delete config[key];
   } else {
      config[key] = value;
   }
}

async function clear() {
   config = {};
}

module.exports = {
   get,
   set,
   clear,
};
