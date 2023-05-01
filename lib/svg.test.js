const SVG = require ('./svg')
const {Circle} = require ('./shapes')

test ('renders a 300 x 200 svg element', ()=>{
    const svg = new SVG ();
    const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`
    
    expect (svg.render()).toEqual(expected);
});
test ('setText and color and append to svg',()=>{
    const svg = new SVG ();
    const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">2</text></svg>`
    svg.setText ("2","blue")
    expect (svg.render()).toEqual(expected);
});
test ('should throw error if text is greater than 3 characters',()=>{
    const svg = new SVG ();
    
    expect (()=>svg.setText ("dertff","blue")).toThrow(new Error("Text can't be greater than 3 characters"));
});
test ('should set correct shape for svg',()=>{
    const svg = new SVG ();
    const circle = new Circle ();
    const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="pink"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">lim</text></svg>`
    circle.setColor("pink")
    svg.setText ("lim", "blue")
    svg.setShape (circle)
    expect (svg.render()).toEqual(expected);
});


