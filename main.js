//https://teachablemachine.withgoogle.com/models/3dsrn-m7b/


Webcam.set(
    {
        width:350,
        height:300,
        image_format:'jpeg',
        jpeg_quality:90
    }
)

camera = document.getElementById("camera");

Webcam.attach("#camera")

function take_snapshot(){

    Webcam.snap(
    function (data_uri){

        document.getElementById("result").innerHTML = '<img id="snap"  src="'+data_uri+'">'

    }
    )
    
}

classifire = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3dsrn-m7b/model.json", modelLoaded)
console.log("ml5version", ml5.version)

function modelLoaded(){
    console.log("model has loaded")

}



function check(){

    img = document.getElementById("snap");
    classifire.classify(img,gotResult)
}

function gotResult(error, results){

    if (error) {
        console.error(error)
        
    }

    else{
        console.log(results)

        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_Accuracy").innerHTML = (results[0].confidence.toFixed(2))*100+"%"
    }

}