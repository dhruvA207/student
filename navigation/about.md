---
layout: post
title: About
permalink: /about/
comments: true
---

## About ME!





<comment>
Flags are made using Wikipedia images
</comment>

<style>
    /* Style looks pretty compact, 
       - grid-container and grid-item are referenced the code 
    */
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Dynamic columns */
        gap: 10px;
    }
    .grid-item {
        text-align: center;
    }
    .grid-item img {
        width: 100%;
        height: 100px; /* Fixed height for uniformity */
        object-fit: contain; /* Ensure the image fits within the fixed height */
    }
    .grid-item p {
        margin: 5px 0; /* Add some margin for spacing */
    }

    .image-gallery {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 10px;
        }

    .image-gallery img {
        max-height: 150px;
        object-fit: cover;
        border-radius: 5px;
    }
</style>

<!-- This grid_container class is used by CSS styling and the id is used by JavaScript connection -->
<div class="grid-container" id="grid_container">
    <!-- content will be added here by JavaScript -->
</div>

<script>
    // 1. Make a connection to the HTML container defined in the HTML div
    var container = document.getElementById("grid_container"); // This container connects to the HTML div

    // 2. Define a JavaScript object for our http source and our data rows for the Living in the World grid
    var http_source = "https://upload.wikimedia.org/wikipedia/commons/";
    var living_in_the_world = [
        {"flag": "0/01/Flag_of_California.svg", "description": "California"},

    ];

    // 3a. Consider how to update style count for size of container
    // The grid-template-columns has been defined as dynamic with auto-fill and minmax

    // 3b. Build grid items inside of our container for each row of data
    for (const location of living_in_the_world) {
        // Create a "div" with "class grid-item" for each row
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";  // This class name connects the gridItem to the CSS style elements
        // Add "img" HTML tag for the flag
        var img = document.createElement("img");
        img.src = http_source + location.flag; // concatenate the source and flag
        img.alt = location.flag + " Flag"; // add alt text for accessibility

        // Add "p" HTML tag for the description
        var description = document.createElement("p");
        description.textContent = location.description; // extract the description

        // Add "p" HTML tag for the greeting
        var greeting = document.createElement("p");
        greeting.textContent = location.greeting;  // extract the greeting

        // Append img and p HTML tags to the grid item DIV
        gridItem.appendChild(img);
        gridItem.appendChild(description);
        gridItem.appendChild(greeting);

        // Append the grid item DIV to the container DIV
        container.appendChild(gridItem);
    }
</script>

### Journey through Life



- ☀️ Born and raised mostly in San Diego, California
- 🏫 Elementary and Middle School in Design 39 Campus
- 🏊🏽‍♂️ I had an early interest in swimmming and am now a competitive swimmer in the club Pacific Swim
- 🏊🏽‍♂️ I am currently a sprint butterfly swimmer and was top 20 in the nation last year in the 50m fly
- 🎹 I have been doing piano for 7 years and am doing a certifcation called Certifcate of Merit
- 💻 I did CyberAegis (cybersecurity) for a short time in 7th grade, but couldn't continue because of my swimming commitment
- 🏫 I am now doing CSSE in Del Norte Highschool as a freshman!


### Culture, Family, and Friends

- 🧑‍🧑‍🧒 Parents both born and raised in India - Both are software engineers
- I have a brother who is 9 years younger than me
- My family and I are Hindus, a common religion from the areas my parents come from
- I love spending time with my friends, from just sitting with them to doing flips into the pool with them!

<comment>
Pictures!
</comment>
<div class="image-gallery">
  <img src="{{site.baseurl}}/images/about/India_flag.png" alt="Image 1">
  <img src="{{site.baseurl}}/images/about/Pacific_swim.png" alt="Image 2">
  <img src="{{site.baseurl}}/images/about/Mihir.jpeg" alt="Image 3">
  <img src="{{site.baseurl}}/images/about/Parents.png" alt="Image 4">
  <img src="{{site.baseurl}}/images/about/Me & my friend.jpeg" alt="Image 5">
</div>
