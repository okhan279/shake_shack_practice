NOTE:

1. To flip a psuedo element, like I have done in section--vacancies:

- In the ::before element add:
  transform: scaleX(-1);
  filter: FlipH

2. To add the "▼" arrow as the dropdown menu arrow (see Mailing List Section for more clarification).

- https://stackoverflow.com/questions/65120873/how-to-add-padding-to-the-default-arrow-in-a-select-dropdown-list

3. To center <li> elements:
   set the <li> elements to 'display: inline-block'
   set the <nav> to 'text-align: center'

4. To make two input boxes with labels side by side:
   Wrap <input> and <label> tag in a <div> container.
   set them as inline-block.
   set width of the input boxes.
   This was done in the media query (769px) with the form at the bottom

5. To crop an image:
   set width and height. Use 'object-fit' property.
   Example of this can be found in media query 800px for the two cropped images.
   Or simply create a copy of the image and crop it through the tools on Mac.

6. When adding sticky nav to the header, the header was jumping some pixels along the page. I found the solution through 2 StackOverflow questions.

- https://stackoverflow.com/questions/17842304/scrolling-sticky-header-jumping
- https://stackoverflow.com/questions/28864210/sticky-navigation-element-jumps-during-scroll

- In short: I added the class '<div id="header_placeholder"></div>', which substitutes in when the nav sticks to the top of the page. The StackOverflow answers explain this really well.

7.  When writing the JS code for the Hamburger and Cross animation, I was unsure how to reverse the transition. I came across a code that had a very similar animation to the one I was after and took chunks from that code and implemented it into mine. The 'transition-delay' set on the original class is for when the animation reverses from the cross back to a hamburger. The 'transition-delay' set in the '.transition' classes is for when the animation transitions from Hamburger to a Cross.
    The code I used to help me with this animation and transition:

- https://codepen.io/designcouch/pen/hyFAD/

Note:

- I need to go back on the form and make it so the arrows in the Date of Birth respond to the click and the
  dropdown menu opens up.
- Look at the "▼" on the 'Day' form. It is not fully fixed inside the box when changing resolution. Look into
  whey that may be.
- An interesting question to ask. In the 'section--kit' for media query 960px, when using 'postion: relative' and 'bottom: 960px' the section underneath it does not adjust to its natural position. But when using 'margin-top: -960px' the element moves up and the section underneath takes back its natural position.
  Also why does 'margin-bottom' not work but 'margin-top' with a negative value does work.
- Important note in using FLOATS on 'section--ethics': When using 'float:right' on the 'background-image-ethics' class, the content was not floating right. When I use 'clear: both' the content floated right.
- If I wish to have it that an element does not expand when the screen width expands, I can always add a 'max-width' property to it. I had this problem with the form at the 'media query 906px', I asked on Stack Overflow and manage to find some good solutions.
- LOOK INTO:
