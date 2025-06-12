import { defineEventHandler, getRequestURL, H3Event, sendRedirect, setCookie } from 'h3';
import { useStorage } from 'nitropack/runtime';

export default defineEventHandler(async (event: H3Event) => {
  const pathname = getRequestURL(event).pathname;
  
  console.log('Request URL:', pathname);
  

  const storage = useStorage('memory');

  console.log('Stored items:', await storage.getItems([]));
});
