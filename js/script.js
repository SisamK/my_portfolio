const cubes = document.querySelectorAll(".cube");

cubes.forEach((cube, index) => {
    cube.addEventListener("click", () => {
        switch (index) {
            case 0:
                   transform: scale(1.2,1.2); 
                break;
            case 1:

               transform: scale(1.2,1.2); 
                break;
            case 2:
               
               transform: scale(1.2,1.2); 
                break;
            case 3:
                   transform: scale(1.2,1.2); 
                break;
            case 4:
                   transform: scale(1.2,1.2); 
                break;
        }
    });
});