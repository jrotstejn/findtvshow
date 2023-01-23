FIND TV SHOW - A SMALL PROJECT BY JONATHAN ROTSTEJN

Welcome to my Find TV Show-github repo!


------------------------------------------------------------------------------------------------------------------


- HOW TO USE THIS WEBSITE?
1) Type a keyword in the input field.
2) The search engine will render all the TV Shows in the database containing the keyword you've entered.
3) You can scroll through the results and click on the desired tv show.
4) A new link will open and take you to the selected show's info on the TV Maze website.


------------------------------------------------------------------------------------------------------------------


- WHAT IS GOING ON UNDER THE HOOD?
1) We make use of the TV-Maze API which we access by making a request by using Axios.
2) The fetched JSON-object contains all the TV Shows matching the entered keyword. 
3) We extract the shows out of the object into one large container. 
4) Each TV Show is displayed into an anchor tag (making it clickable) which contains a link, an image and a title.
5) The input field makes use of AJAX, fetching and rendering the results all over again once you change the keyword.


------------------------------------------------------------------------------------------------------------------


- USED TECHNOLOGIES:
1) HTML
2) CSS
3) Vanilla JavaScript    (plain JS without any frameworks)
4) Axios                 (a promise based HTTP client)