(function(){


    // "use strict;"
    "use strict";

    const detailsForm = document.querySelector("#destination_details_form");

    console.log("detailsForm.length: "+detailsForm.length);
    console.log("detailsForm.elements.length: "+detailsForm.elements.length);
    console.log(detailsForm.elements);

    const destContainer = document.getElementById("destinations_container");

    detailsForm.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event){
        event.preventDefault();

        var destName = event.target.elements['name'].value;
        var destPhoto = event.target.elements['photo'].value;
        var destLoc = event.target.elements['location'].value;
        var destDescr = event.target.elements['description'].value;
        
        for (elem of event.target.elements){
            console.log(`Resetting element named ${elem.name} with id: ${elem.id},`
                    + ` type: ${typeof elem},`
                    + ` localName: ${elem.localName}, value: ${elem.value} ...`);
            elem.value = "";
        }

        const destCard = createDestCard(destName, destLoc, destPhoto, destDescr);

        if (destContainer.children.length !== 0) {
            document.getElementById("title").innerText = "My Wish List";
        }

        destContainer.appendChild(destCard);

    }


    function createDestCard(name, location, photoURL, descr){
        var card = document.createElement('div');
        card.className = 'card';

        var img = document.createElement('img');
        img.setAttribute('alt', name);
        img.setAttribute('src', photoURL ? photoURL : "images/signpost.jpg");
        card.appendChild(img);

        var cardbody = document.createElement('div');
        cardbody.setAttribute('class', 'card-body');

        var h3 = document.createElement('h3');
        h3.innerText = name;
        cardbody.appendChild(h3);

        var h4 = document.createElement('h4');
        h4.innerText = location;
        cardbody.appendChild(h4);

        var p = document.createElement('p');
        p.className = 'card-text';
        p.innerText = descr;
        cardbody.appendChild(p);

        var button = document.createElement('button');
        button.innerText = 'Remove';
        button.onclick = function(){
            // destContainer.removeChild(card);
            card.remove;
        };
        cardbody.appendChild(button);

        card.appendChild(cardbody);

        // destContainer.appendChild(card);
        return card;

    }


    function removeDestination(event){
        var card = event.target.parentElement.parentElement;
        card.remove();
    }

})();