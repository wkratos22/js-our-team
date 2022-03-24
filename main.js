var person = [
    
    {
        "Nome": `Wayne Barnett`,
        "ruolo" :`Founder & CEO`,
        "img" :`wayne-barnett-founder-ceo.jpg`
    }, 

    {
        "Nome": `Angela Caroll`,
        "ruolo" :`Chief Editor`,
        "img" :`angela-caroll-chief-editor.jpg`
    },

    {
        "Nome": `Walter Gordon`,
        "ruolo" :`Office Manager`,
        "img" :`walter-gordon-office-manager.jpg`,
    },    

    {
        "Nome": `Angela Lopez`,
        "ruolo" :`Social Media Manager`,
        "img" :`angela-lopez-social-media-manager.jpg`
    },

    {
        "Nome": `Scott Estrada`,
        "ruolo" :`Develper`,
        "img" :`scott-estrada-developer.jpg`
    },

    {
        "Nome": `Barabara Ramos`,
        "ruolo" :`Graphic Designer`,
        "img" :`barbara-ramos-graphic-designer.jpg`
    },
];

console.log(person);
 
for (let i = 0; i <= 6; i++){
    for (let key in person[i]){
        document.getElementById("infoContainer").innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="./img/${person[i]["img"]}" class="cardo-img-top" alt="propic">
            <div class="card-body">
                <h5 class="card-title">${person[i]["Nome"]}</h5>
                <p class="card-title">${person[i]["ruolo"]}</p>
            </div>
        </div>
        `
    }
}
