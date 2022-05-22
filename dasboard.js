append();

function append(){
    console.log("Sonu")
    let data=JSON.parse(localStorage.getItem("student"));
    let container=document.getElementById("container");
    container.innerHTML=null;

    data.forEach(function (el, index){
        let box =document.createElement("div");

        let img=document.createElement("img");
        img.src=el.img;
        let p1=document.createElement("p");
        p1.innerText=el.name;

        let p2=document.createElement("p");
        p2.innerText=el.course;

        let p3=document.createElement("p");
        p3.innerText=el.unit;

        let p4=document.createElement("p");
        p4.innerText=el.batch;

        let btn=document.createElement("button");
        btn.innerText="Remove";
        btn.addEventListener("click", function () {
            remove(index);
        });
        box.append(img, p1, p2, p3, p4, btn)
        container.append(box)
    })
}

function remove(index){
    data.splis(index, 1)
    let data=JSON.parse(localStorage.getItem("student")) || []
    let newData=data.filter(function(el, i){
        if(i===index){
            let trash=JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(el);
            localStorage.setItem("trash",JSON.stringify(trash));

        }
        else{
            return i!==index;
        }
    });
    window.location.reload()

}