let input = document.querySelector("input");

const fetchShows = async () => {
    try{

    // fetching the data
    const shows = await axios.get(`https://api.tvmaze.com/search/shows?q=${input.value}`);

    // resetting the result container
    document.querySelector("#results").remove();
    let result = document.createElement("DIV");
    result.setAttribute("id", "results");
    document.querySelector("#resultscontainer").appendChild(result);

    // extracting the needed show info out of the object
    for(let show of shows.data){

        // creating the img (some imgs have a value of null!)
        const newImg = document.createElement("IMG");  
        if(show.show.image != null){
        newImg.setAttribute("src", show.show.image.medium);
    }
        else{
        newImg.setAttribute("alt", "picture missing")
        }

        // creating the links
        const newLink = document.createElement("A");
        newLink.setAttribute("href", show.show.url);
        newLink.setAttribute("target", "_blank");

        // creating the title
        const newP = document.createElement("P");
        newP.append(show.show.name);

        // creating the div where we will store title and image inside
        const newDiv = document.createElement("DIV");
        newDiv.append(newP);
        newDiv.append(newImg);

        // appending the div to anchor element
        newLink.append(newDiv);

        // appending the anchor tag (with the div inside) to the results container
        result.append(newLink); 
    }
    } catch (e) {
        alert(e);
    }
}

input.addEventListener("input", fetchShows);