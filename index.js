const sections = document.getElementsByClassName("section");

for(i=0;i<sections.length;i++){
    sections[i].addEventListener("click",function(){
        const isActive = this.classList.contains("active");
        
        for(i=0;i<sections.length;i++){
            sections[i].classList.remove("active");
        }
        if(!isActive){
            this.classList.add("active");
        }
    })
}

