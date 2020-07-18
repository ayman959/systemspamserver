const Discord = require("discord.js");
const myid = ['639264083186810902'];
const prefix = ['+'];
const schedule = require('node-schedule');
const client = new Discord.Client();


require('events').EventEmitter.defaultMaxListeners = 999999999999999999;

 
//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//

client.login("NzMxMjMzMDUwMTc1OTk1OTc5.XwjEGg.TFu5grBaSX9usqxlugk56wVZNJw");


//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//


client.on('message', message => {
	 let count = 0;
      let ecount = 0;
	    for(let x = 0; x < 100; x++) {
         if (message.content === ( prefix + `${x}`)) {
            message.channel.send(`${x}s #credits  <@504987435042865162>  5000 `)
          .then(m => {
            count++;
     })}
   }
});




//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//

                                                          // TIMER //

function scheduledCommand(hour, minute=0, command){
      
        schedule.scheduleJob('00 ' + minute + ' ' + hour +' * * *', function(){
            client.channels.get('731864164506533989').send( prefix + command);
        }
      );  
}


//✠▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬✠//
//////////////////////////////////////////
/////////////// timer spam ///////////////
                                        //           
scheduledCommand(8,1, 'spam');          //
scheduledCommand(8,31, 'spam');         // 
scheduledCommand(9,1, 'spam');          //
scheduledCommand(9,31, 'spam');         //
scheduledCommand(10,1,'spam');          //
scheduledCommand(10,31, 'spam');        //
scheduledCommand(12,31, 'spam');        //
scheduledCommand(13,1,'spam');          //
scheduledCommand(13,31, 'spam');        //
scheduledCommand(14,1, 'spam');         //
scheduledCommand(14,31, 'spam');        //
scheduledCommand(15,1, 'spam');         //
scheduledCommand(15,31, 'spam');        //
scheduledCommand(16,1, 'spam');         //
scheduledCommand(16,31, 'spam');        //
scheduledCommand(17,1, 'spam');         //
scheduledCommand(17,31, 'spam');        //
scheduledCommand(18,1, 'spam');         //
scheduledCommand(18,31, 'spam');        //
                                        //
//////////////timer stop /////////////////
                                        //
scheduledCommand(19,31, 'stop');        //
scheduledCommand(19,35, 'stop');        //
scheduledCommand(19,41, 'stop');        //
                                        //          
/////// ///////timer daily////////////////           
                                        //           
scheduledCommand(17,29, 'daily');       //           
                                        //           
///////////////timer rep//////////////////                                     
                                        //           
scheduledCommand(17,34, 'prep');         //           
                                        //           
//////////////timer command///////////////
                                        //              
spam();                                 //           
stop();                                 //           
daily();                                //           
rep();                                  //            
prep();                                 //
                                        //   
//////////////////////////////////////////   
//✠▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬✠//   

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//

                                                       // AYMAN REP //


function rep ( ){
client.on("message",message => {

if ( message.content ===  prefix + "rep"){

client.channels.get("731503366940655616").send("[جار ارسال الامر rep....]");
client.channels.get("731533278271766548").send("0rep");
client.channels.get("731551395362373664").send("1rep");
client.channels.get("731551792478814219").send("2rep");
client.channels.get("731552060662743211").send("3rep");
client.channels.get("731552340116504576").send("4rep");
client.channels.get("731552518974472323").send("5rep");
client.channels.get("732093290886725733").send("6rep");
client.channels.get("732302332582428722").send("7rep");
client.channels.get("732302950700941383").send("8rep");
client.channels.get("732302560991379476").send("9rep");


}}  )}


client.on('message', message => {
if (message.content ===  '0rep') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10; x++) {
        message.channel.send(`${x}r`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client.on('message', message => {
if (message.content ===  '1rep') {
      let count = 0;
      let ecount = 0;
      for(let x = 10; x < 20; x++) {
        message.channel.send(`${x}r`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client.on('message', message => {
if (message.content ===  '2rep') {
      let count = 0;
      let ecount = 0;
      for(let x = 20; x < 30; x++) {
        message.channel.send(`${x}r`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client.on('message', message => {
if (message.content ===  '3rep') {
      let count = 0;
      let ecount = 0;
      for(let x = 30; x < 40; x++) {
        message.channel.send(`${x}r`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client.on('message', message => {
if (message.content ===  '4rep') {
      let count = 0;
      let ecount = 0;
      for(let x = 40; x < 50; x++) {
        message.channel.send(`${x}r`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client.on('message', message => {
if (message.content ===  '5rep') {
      let count = 0;
      let ecount = 0;
      for(let x = 50; x < 60; x++) {
        message.channel.send(`${x}r`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client.on('message', message => {
if (message.content ===  '6rep') {
      let count = 0;
      let ecount = 0;
      for(let x = 60; x < 70; x++) {
        message.channel.send(`${x}r`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client.on('message', message => {
if (message.content ===  '7rep') {
      let count = 0;
      let ecount = 0;
      for(let x = 70; x < 80; x++) {
        message.channel.send(`${x}r`)
          .then(m => {
            count++;
          })
          
        }
      }
}); 



client.on('message', message => {
if (message.content ===  '8rep') {
      let count = 0;
      let ecount = 0;
      for(let x = 80; x < 90; x++) {
        message.channel.send(`${x}r`)
          .then(m => {
            count++;
          })
          
        }
      }
}); 


client.on('message', message => {
if (message.content ===  '9rep') {
      let count = 0;
      let ecount = 0;
      for(let x = 90; x < 100; x++) {
        message.channel.send(`${x}r`)
          .then(m => {
            count++;
          })
          
        }
      }
}); 
 
 
 
//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//

                                                         //  DAILY //

function daily ( ){
client.on("message",message => {

if ( message.content ===  prefix + "daily"){

client.channels.get("731503366940655616").send("[جار ارسال الامر daily....]");
client.channels.get("731551286146891786").send("0daily");
client.channels.get("731551485074341948").send("1daily");
client.channels.get("731551947852742738").send("2daily");
client.channels.get("731552177595744318").send("3daily");
client.channels.get("731552450770632804").send("4daily");
client.channels.get("731552661995913236").send("5daily");
client.channels.get("732093335056941087").send("6daily");
client.channels.get("732302446302593206").send("7daily");
client.channels.get("732303030120218706").send("8daily");
client.channels.get("732302749890379878").send("9daily");

}})}

client.on('message', message => {
if (message.content ===  '0daily') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10; x++) {
        message.channel.send(`${x}d`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client.on('message', message => {
if (message.content ===  '1daily') {
      let count = 0;
      let ecount = 0;
      for(let x = 10; x < 20; x++) {
        message.channel.send(`${x}d`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client.on('message', message => {
if (message.content ===  '2daily') {
      let count = 0;
      let ecount = 0;
      for(let x = 20; x < 30; x++) {
        message.channel.send(`${x}d`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client.on('message', message => {
if (message.content ===  '3daily') {
      let count = 0;
      let ecount = 0;
      for(let x = 30; x < 40; x++) {
        message.channel.send(`${x}d`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client.on('message', message => {
if (message.content ===  '4daily') {
      let count = 0;
      let ecount = 0;
      for(let x = 40; x < 50; x++) {
        message.channel.send(`${x}d`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client.on('message', message => {
if (message.content ===  '5daily') {
      let count = 0;
      let ecount = 0;
      for(let x = 50; x < 60; x++) {
        message.channel.send(`${x}d`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client.on('message', message => {
if (message.content ===  '6daily') {
      let count = 0;
      let ecount = 0;
      for(let x = 60; x < 70; x++) {
        message.channel.send(`${x}d`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message', message => {
if (message.content ===  '7daily') {
      let count = 0;
      let ecount = 0;
      for(let x = 70; x < 80; x++) {
        message.channel.send(`${x}d`)
          .then(m => {
            count++;
          })
          
        }
      }
});


client.on('message', message => {
if (message.content ===  '8daily') {
      let count = 0;
      let ecount = 0;
      for(let x = 80; x < 90; x++) {
        message.channel.send(`${x}d`)
          .then(m => {
            count++;
          })
          
        }
      }
});



client.on('message', message => {
if (message.content ===  '9daily') {
      let count = 0;
      let ecount = 0;
      for(let x = 90; x < 100; x++) {
        message.channel.send(`${x}d`)
          .then(m => {
            count++;
          })
          
        }
      }
});


//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//

                                                        // PRIVET REP //


function prep ( ){
client.on("message",message => {

if ( message.content ===  prefix + "prep"){

client.channels.get("731503366940655616").send("[جار ارسال الامر privet rep....]");
client.channels.get("731550327639375884").send("0prep");
client.channels.get("731551428295917693").send("1prep");
client.channels.get("731551843523756153").send("2prep");
client.channels.get("731552112755867771").send("3prep");
client.channels.get("731552381447176215").send("4prep");
client.channels.get("731552597986639974").send("5prep");
client.channels.get("732093230891401257").send("6prep");
client.channels.get("732302383090237580").send("7prep");
client.channels.get("732303003608023102").send("8prep");
client.channels.get("732302717661216808").send("9prep");

}}  ) }




client.on('message', message => {
if (message.content ===  '0prep') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 10; x++) {
        message.channel.send((`${x}s  `) + ("#rep " ) + ("<@" ) + ( myid) + (">") )
          .then(m => {
            count++;
          })
          
        }
      }
});


client.on('message', message => {
if (message.content ===  '1prep') {
      let count = 0;
      let ecount = 0;
      for(let x = 10; x < 20; x++) {
        message.channel.send((`${x}s  `) + ("#rep " ) + ("<@" ) + ( myid) + (">") )
          .then(m => {
            count++;
          })
          
        }
      }
});


client.on('message', message => {
if (message.content ===  '2prep') {
      let count = 0;
      let ecount = 0;
      for(let x = 20; x < 30; x++) {
        message.channel.send((`${x}s  `) + ("#rep " ) + ("<@" ) + ( myid) + (">") )
          .then(m => {
            count++;
          })
          
        }
      }
});


client.on('message', message => {
if (message.content ===  '3prep') {
      let count = 0;
      let ecount = 0;
      for(let x = 30; x < 40; x++) {
        message.channel.send((`${x}s  `) + ("#rep " ) + ("<@" ) + ( myid) + (">") )
          .then(m => {
            count++;
          })
          
        }
      }
});


client.on('message', message => {
if (message.content ===  '4prep') {
      let count = 0;
      let ecount = 0;
      for(let x = 40; x < 50; x++) {
        message.channel.send((`${x}s  `) + ("#rep " ) + ("<@" ) + ( myid) + (">") )
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message', message => {
if (message.content ===  '5prep') {
      let count = 0;
      let ecount = 0;
      for(let x = 50; x < 60; x++) {
        message.channel.send((`${x}s  `) + ("#rep " ) + ("<@" ) + ( myid) + (">") )
          .then(m => {
            count++;
          })
          
        }
      }
});


client.on('message', message => {
if (message.content ===  '6prep') {
      let count = 0;
      let ecount = 0;
      for(let x = 60; x < 70; x++) {
        message.channel.send((`${x}s  `) + ("#rep " ) + ("<@" ) + ( myid) + (">") )
          .then(m => {
            count++;
          })
          
        }
      }
});



client.on('message', message => {
if (message.content ===  '7prep') {
      let count = 0;
      let ecount = 0;
      for(let x = 70; x < 80; x++) {
        message.channel.send((`${x}s  `) + ("#rep " ) + ("<@" ) + ( myid) + (">") )
          .then(m => {
            count++;
          })
          
        }
      }
});



client.on('message', message => {
if (message.content ===  '8prep') {
      let count = 0;
      let ecount = 0;
      for(let x = 80; x < 90; x++) {
        message.channel.send((`${x}s  `) + ("#rep " ) + ("<@" ) + ( myid) + (">") )
          .then(m => {
            count++;
          })
          
        }
      }
});




client.on('message', message => {
if (message.content ===  '9prep') {
      let count = 0;
      let ecount = 0;
      for(let x = 90; x < 100; x++) {
        message.channel.send((`${x}s  `) + ("#rep " ) + ("<@" ) + ( myid) + (">") )
          .then(m => {
            count++;
          })
          
        }
      }
});



//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//

                                                           // SPAM //

function spam ( ){
client.on("message",message => {

if ( message.content === prefix + "spam"){

client.channels.get("731503366940655616").send("[جار ارسال الامر spam....]");
client.channels.get("730857161781149736").send("0slow");
client.channels.get("731254086464176203").send("1slow");
client.channels.get("713374017578598412").send("2slow");
client.channels.get("713374041662161007").send("3slow");
client.channels.get("730920296114159667").send("4slow");
client.channels.get("731025461739782144").send("5slow");
client.channels.get("732093079296802878").send("6slow");
client.channels.get("732302202651017247").send("7slow");
client.channels.get("732302907688484986").send("8slow");
client.channels.get("732302511410511913").send("9slow");



}}  ) }

function stop ( ){
client.on("message",message => {

if ( message.content === prefix + "stop"){

client.channels.get("731503366940655616").send("[جار ارسال الامر stop....]");
client.channels.get("730857161781149736").send("0stop");
client.channels.get("731254086464176203").send("1stop");
client.channels.get("713374017578598412").send("2stop");
client.channels.get("713374041662161007").send("3stop");
client.channels.get("730920296114159667").send("4stop");
client.channels.get("731025461739782144").send("5stop");
client.channels.get("732093079296802878").send("6stop");
client.channels.get("732302202651017247").send("7stop");
client.channels.get("732302907688484986").send("8stop");
client.channels.get("732302511410511913").send("9stop");

}}  ) }




//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//

                                                           // log //




client.on('message', message => {
if (message.content ===  '[جار ارسال الامر spam....]') {
      {
        message.channel.send(`تم الارسال`)
          .then(m => {
            count++;
          })
          
        }
      }
})


client.on('message', message => {
if (message.content ===  '[جار ارسال الامر stop....]') {
      {
        message.channel.send(`تم الارسال`)
          .then(m => {
            count++;
          })
          
        }
      }
})


client.on('message', message => {
if (message.content ===  '[جار ارسال الامر daily....]') {
      {
        message.channel.send(`تم الارسال`)
          .then(m => {
            count++;
          })
          
        }
      }
})



client.on('message', message => {
if (message.content ===  '[جار ارسال الامر privet rep....]') {
      {
        message.channel.send(`تم الارسال`)
          .then(m => {
            count++;
          })
          
        }
      }
})



client.on('message', message => {
if (message.content ===  '[جار ارسال الامر rep....]') {
      {
        message.channel.send(`تم الارسال`)
          .then(m => {
            count++;
          })
          
        }
      }
})

















