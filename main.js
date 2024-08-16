var count=1;

function next(){
    count=count+1;
    if(count>10){
        count=1;
    }
    updateImage();
}

function back(){
    count=count-1;

    if(count<1){
        count=10;
    }
    updateImage();
}

function updateImage() {
    const imageElement = document.getElementById('alf');
    imageElement.src = 'alfiepics/alfie'+count+".png";
}