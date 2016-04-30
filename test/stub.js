
module.exports = function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    
    if(myTimer.isPastDue)
    {
        context.log('Node.js is running late!');
    }
    context.log('Stub function ran!', timeStamp);   
    
    runAction(context).then(function(){
        context.done();    
    });
};


