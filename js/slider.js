let offset=0; //смещение от левого края
const sliderLine=document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click',function(){
    offset=offset+420; 
    if (offset>1080){
        offset=0;
    }
    sliderLine.style.left=-offset+'px';
});

document.querySelector('.slider-prev').addEventListener('click',function(){
    offset=offset-420; 
    if (offset<0){
        offset=1080;
    }
    sliderLine.style.left=-offset+'px';
});