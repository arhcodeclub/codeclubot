const { SerialPort } = require("serialport");
const config = require("./config.json");


const microbitserial = new SerialPort({
    path: config.devicePath,
    baudRate: config.baudRate
});

microbitserial.on('open', ()=>{

    console.log("Port succesfully opened!");

});

microbitserial.on("error", (error)=>{

    console.log(`Error with microbit: ${error.message}`);

});

microbitserial.on("close", ()=>{

    console.log("Microbit serial port closed!");

});


module.exports = microbitserial;