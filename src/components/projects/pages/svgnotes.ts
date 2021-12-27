export const svgnotes = ["SVG Notes", `
# Notes on the SVG File Format
### Compiled December 24, 2021

SVG stands for "Scalable Vector Graphics" and is, as you can guess, a way to store images in the form of scalable vectors.

They're commonly used to cut down on expensive large pngs because... well, they can be scaled.

And they initialize with something like this:

\`\`\`svg
<svg width="200" height="200" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>
\`\`\`

They follow the markup language format that XML, HTML, YAML, etc. use to organize objects.

The \`\`width\`\` and \`\`height\`\` tags define the **dimensions** of the svg, whereas the \`\`viewBox\`\` defines the **viewport** of the svg.

Technically, svgs are on an infinite R2 plane (yeah yeah, boring math) and the \`\`viewBox\`\` just defines what part of that R2 plane to render. That rendered image is then upscaled to fit the dimensions of the svg.

There are some basic shapes that can be used for the heck of it:

\`\`\`
<rect x= y= rx= ry= width= height=/> // x and y are top left corner, rx and ry are corners
<circle cx= cy= r=/> // center x/y and radius
<ellipse cx= cy= rx= ry=/>
<line x1= x2= y1= y2=/> // start coord to finish coord
<polyline points="x y, x y, x y"/> // list of them
\`\`\`

And then there are paths, which are basically the only relevant shape object. They look like this:

\`\`\`
<path d="blah"/>
\`\`\`

\`\`\`c#
namespace MyNamespace {
    public class MyClass {
        public static void Main(string[] args) {
            Console.WriteLine("Hello there!");
        }
    }
}
\`\`\`

> Commands for d include:  
> Move (\`\`M x y\`\`)  
> Line (\`\`L x y\`\`) or (\`\`H x\`\`) or (\`\`V y\`\`)  
> Cubic Bezier (\`\`C cx1 cy1 cx2 cy2 x y\`\`)  
> Chained Cubic Beziers can use (\`S cx2 cy2 x y\`), where the previous cx2 cy2 is the next cx1 cy1  
> Quadratic Bezier (\`\`Q qx qy x y\`\`)  
> Arc (\`A rx ry theta is-large-arc is-positive-arc x y\`)

You kind of just string them together and hope for the best.

ex. \`\`<path d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>\`\`
give you something like

<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
</svg>

> Move to (10, 80)  
> Start cubic bezier, control points at (40, 10) and (65, 10), end at (95, 80)  
> Continue bezier, control point (150, 150), end at (180, 80)  

Cool, huh?
`]