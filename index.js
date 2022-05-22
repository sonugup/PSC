
function Student(n, c, u, i, b){
    this.name=n;
    this.course=c;
    this.unit=u;
    this.img=i;
    this.batch=`Ft-Web-${b}`
}


function storeData(el){
    el.preventDefault();
    let form=document.getElementById("form");
    let name=form.name.value;
    let course=form.course.value;
    let unit=form.unit.value;
    let img=form.image.value;
    let batch=form.batch.value;
   
    let stu=new Student(name, course, unit, img, batch)
    let data=JSON.parse(localStorage.getItem("student"))|| [];
    data.push(stu)
    localStorage.setItem("student",JSON.stringify(data))
    console.log(stu)
    window.location.href="dasboard.html"
}



function calculate(){
    let data=JSON.parse(localStorage.getItem("student")) || [];
    let obj={};
    for(let i=0; i<data.length; i++){
        if(!obj[data[i].batch]){
            obj[data[i].batch]=0
        }
    }

    for(let i=0; i<data.length; i++){   
            obj[data[i].batch]++
    }
    console.log(obj)
   
}
calculate()

