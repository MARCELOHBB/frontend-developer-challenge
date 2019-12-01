Starting challenge!!!!!!!

*About this project:
--------------------
This is a landing page layout that lists the products for sale, and a form for sharing.
Only the button for "more products" is functional, the rest remains static.

*Project organisation:
----------------------
The .css files are on the static page, the javascript file in the js folder and the html in the parent folder.

*Usage:
--------
You only need to open the html file with the browse of your choice to see the layout working.



*Coding process description:
-----------------------------

TEMPLATE, HTML AND CSS

..............................................................................................

Started the project by parts, first the head then the body, then inside the body start with the header.
Divide it with DIV and NAV, but after a better analysis, I realized that I could more easily follow the spacing specifications without the DIV. Although I use relative measurements in my projects, I have specifications to follow and since I had not worked following the guidelines of a designer, I believe my only option is to use absolute measurements directly in the header as a parent.

Also realize that the specified font did not match the designer and the name Regular generated error in chrome. After some research on the internet, I found that the helvetica Neue font has some problems with chrome, but I haven't found a solution yet, so I decided to use only helvetica for now.

For the product display part I used two DIVs to align the two product lines, each with four product displays. I used an unordered list for each product. For the option to send and share I used a FORM.
Seeing that I used absolute measurements, I noticed that when the screen changes size the elements move and become misaligned, but I have not yet found a way to follow the given parameters and make the screen responsive. Still working on it.

Relative measures were used, in this case the percentage, for the best usability of the page, thus reducing the number of element misalignment when changing the screen size.
..............................................................................................

JAVASCRIPT

..............................................................................................

I started by adding a click event to the button. I need it to add new elements to the DIV. A specific function has been made for creating the product lists and the division they would be inserted into. Inside the enventListener, i insert the product division that was created within DIV POS.

I encountered problem when inserting the new elements. The elements below do not move down,thereby overlapping with the added ones. Still working on it.

Decided to change the DIV POS class to another one at the time of the click, so i created the changeClass function, I tried to anchor the elements below at the bottom of the page, but so far unsuccessfully looking for a solution yet.

Since the challenge will be delivered today, unfortunately I will not be able to complete the page completely. it still need implementation/update on what I described as "still working on it" above, and feed the lists with the api products. But although I did not complete the challenge, I took it as a great learning opportunity.