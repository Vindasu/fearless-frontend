window.addEventListener('DOMContentLoaded', async () => {

    const url = 'http://localhost:8000/api/states/';

    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();

        const selectTag = document.getElementById('state');
        for (let state of data.states) {
        // Create an 'option' element
            const element = document.createElement('option');
            element.setAttribute('option',state.name.abbreviation);
            
        // Set the '.value' property of the option element to the
        // state's abbreviation
            const html = document.getElementById("option").innerHTML;

        // Set the '.innerHTML' property of the option element to
        // the state's name
            selectTag.append('option')
        // Append the option element as a child of the select tag
    }
    selectTag.classList.remove("d-none")
    }
});