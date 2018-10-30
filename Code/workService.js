var w;
function startWorker(){
    if(typeof(Worker) !== "undefined"){
        if(typeof(w) === "undefined"){
            w = new Worker("readData.js");
        }
        w.onmessage = function(event){
            $("#workerDiv").html(event.data);
        }
    }
    else{
        $("#workerDiv").html("No support");
    }
}
function stopWorker(){
    w.terminate();
    w = undefined;
}