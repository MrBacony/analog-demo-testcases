import memoryDriver from 'unstorage/drivers/memory';
import { defineNitroPlugin, useStorage } from 'nitropack/runtime';
export default defineNitroPlugin((nitroApp) => 
   useStorage().mount('memory', memoryDriver()));

