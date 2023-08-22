class Shape {
    constructor(color) {
        this.color = color;
    }

    // methods
    setColor(newColor) {
        this.color = newColor;
    }
}

class Circle extends Shape {
    render() {
        return `<circle r = "100" cx = "150" cy = "100" fill="${this.color}"/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render(){
        return `<rect x = "75" y = "25" height= "150" width = "150" fill= "${this.color}"/>`
    }
}


module.exports = {
    Circle,
     Triangle,
     Square
}