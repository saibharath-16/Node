const EventEmitter = require('events');
const eventEmitter = new EventEmitter();


eventEmitter.on('start', () => {
    console.log('start event has been triggered.');
  });
  

  eventEmitter.on('data', (data) => {
    console.log(`Received data: ${data}`);
  });
  
 
eventEmitter.emit('start');
//using emit method
eventEmitter.emit('data', 'Hello World.');


eventEmitter.once('once', () => {
    console.log('This will only be logged once.');
  });
  
  // Trigger the 'once' event multiple times
  eventEmitter.emit('once');
  eventEmitter.emit('once');
  eventEmitter.emit('once');

  
const listener = () => {
    console.log('This listener will be removed.');
  };
  
 //to remove events
  eventEmitter.on('remove', listener);
    eventEmitter.removeListener('remove', listener);
    eventEmitter.emit('remove');
  
  