
const {createCanvas} = require('canvas');

const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });



it('compare canvas before making', () =>{
    const context = createCanvas(200, 200).getContext('2d');

    context.fillStyle = "rgb(200, 0, 0)";
    context.fillRect (10, 10, 50, 50);

    context.fillStyle = "rgba(0, 0, 200, 0.5)";
    context.fillRect (30, 30, 50, 50);


    expect(context.canvas.toBuffer()).toMatchImageSnapshot();
});


