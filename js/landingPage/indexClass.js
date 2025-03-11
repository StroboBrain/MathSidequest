export default class IndexClass {

    constructor(containerToAddMenu){
        this.containerToAddMenu = containerToAddMenu;
        this.buttonArray = [];
    }

    addButton(id, className, textContent){
        let button = this.createButton(id,className,textContent);
        this.buttonArray.push(button);
    }

    createButton(id, className, textContent, onClick) {
        // Create the button element
        const button = document.createElement("button");
    
        // Set attributes
        button.id = id;
        button.className = className;
        button.textContent = textContent;
    
        // Add event listener if provided
        if (onClick && typeof onClick === "function") {
            button.addEventListener("click", onClick);
        }
    
        // Return the created button
        return button;
    }

    setUpDisplay(){
        console.log(this.buttonArray);
        for (const tempButton of this.buttonArray){
            console.log(tempButton + "button");
            this.containerToAddMenu.appendChild(tempButton);
        }
    }

}