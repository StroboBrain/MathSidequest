export default class IndexClass {

    constructor(containerToAddMenu){
        this.containerToAddMenu = containerToAddMenu;
        this.buttonArray = [];
    }

    addButton(id, className, textContent, onClickPath){
        let button = this.createButton(id,className,textContent, onClickPath);
        this.buttonArray.push(button);
    }

    createButton(id, className, textContent, onClickPath) {
        // Create the button element
        const button = document.createElement("button");
    
        // Set attributes
        button.id = id;
        button.className = className;
        button.textContent = textContent;

    
        // Add event listener if provided
        console.log(onClickPath);
        button.addEventListener("click", this.createOnClick(onClickPath));
        
        // Return the created button
        return button;
    }

    setUpDisplay(){
        for (const tempButton of this.buttonArray){
            this.containerToAddMenu.appendChild(tempButton);
        }
    }

    createOnClick(path) {
        return function() {
            window.location.href = path;
        };
    }

}