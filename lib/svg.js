class SVG {
    // properties
    constructor(shape, text) {
        this.shape = shape;
        this.text = text;
    }

    // methods
    render() {
        return `
<svg width = "300" height = "200">
    ${this.shape.render()}
    ${this.text.render()}
</svg>
        `
    }
}



module.exports = SVG;