const displayProphets = (dataProphets) => {
  dataProphets.prophets.forEach ( 
    prophet => {
        let article = document.createElement("article");
    
        let prophetName = document.createElement("h3");
        prophetName.textContent = prophet.name;
        console.log(prophet)
    
        let date = document.createElement("h4");
        date.textContent = `location: ${prophet.birthdate}`;
    
        let location = document.createElement("h4");
        location.textContent = `birth place: ${prophet.birthplace}`;
    
        let img = document.createElement("img");
        img.setAttribute("src", prophet.imageurl);
        console.log(prophet.imageUrl)
        img.setAttribute("alt", prophet.name);
    
        article.appendChild(prophetName);
        article.appendChild(date);
        article.appendChild(location);
        article.appendChild(img);
    
        document.querySelector("#cards").appendChild(article);
      });
    };
    const getlatter_day_prophets = async () => {
      const response = await fetch(
        "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json"
      );
      prophetList = await response.json();
      displayProphets(prophetList);
    };
    getlatter_day_prophets();