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
      Example of this can be found in media query 800px for the two cropped images

Note:

- I need to go back on the form and make it so the arrows in the Date of Birth respond to the click and the
  dropdown menu opens up.
- Look at the "▼" on the 'Day' form. It is not fully fixed inside the box when changing resolution. Look into
  whey that may be.
- An interesting question to ask. In the 'section--kit' for media query 960px, when using 'postion: relative' and 'bottom: 960px' the section underneath it does not adjust to its natural position. But when using 'margin-top: -960px' the element moves up and the section underneath takes back its natural position.
  Also why does 'margin-bottom' not work but 'margin-top' with a negative value does work.
