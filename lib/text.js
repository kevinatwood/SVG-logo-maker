class Text {
    constructor(characters, color) {
        this.characters = characters;
        this.color = color;
    }

    render() {
        return `<text x = "150" y = "115" text-anchor="middle" font-size="50" fill="${this.color}">${this.characters}</text>`
    }
 }
 
 class TriangleText extends Text {
    render(){
        return`<text x = "150" y = "150" text-anchor="middle" font-size="50" fill="${this.color}">${this.characters}</text>`
    }
 }

 module.exports = {
    Text,
    TriangleText
 }