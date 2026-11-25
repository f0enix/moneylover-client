const { getMoneyLover } = require('../util');
async function getDevices () {
   try {
      const ml = await getMoneyLover();
      const devices = await ml.getUserDevices();
      return devices;
   } catch (error) {
      console.error('Error requesting devices: ', error);
   }
};

async function removeDevice (deviceId) {
   try {
      const ml = await getMoneyLover();
      const res = await ml.removeUserDevice(deviceId);
      return res;
   } catch (error) {
      console.error('Error removing device: ', error);
   }
};

module.exports = { getDevices, removeDevice }