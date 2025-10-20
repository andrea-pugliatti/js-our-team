/*
 * Our Team
 *
 * Dato un array di oggetti rappresentante un team di un’azienda,
 * creare una pagina dedicata  in cui mostrare una card per ciascun componente.
 *
 * Bonus
 * Rendere l’esercizio responsive, mandando a capo le card
 * Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro
 * sulla pagina
 */

const teamMembers = [
	{
		name: "Marco Bianchi",
		role: "Designer",
		email: "marcobianchi@team.com",
		img: "img/male1.png",
	},
	{
		name: "Laura Rossi",
		role: "Front-end Developer",
		email: "laurarossi@team.com",
		img: "img/female1.png",
	},
	{
		name: "Giorgio Verdi",
		role: "Back-end Developer",
		email: "giorgioverdi@team.com",
		img: "img/male2.png",
	},
	{
		name: "Marta Ipsum",
		role: "SEO Specialist",
		email: "martarossi@team.com",
		img: "img/female2.png",
	},
	{
		name: "Roberto Lorem",
		role: "SEO Specialist",
		email: "robertolorem@team.com",
		img: "img/male3.png",
	},
	{
		name: "Daniela Amet",
		role: "Analyst",
		email: "danielaamet@team.com",
		img: "img/female3.png",
	},
];

/**
 * **buildCard**
 * Receives an object and builds the markup for a card.
 * @param {object} member
 * @returns {string}
 */
const buildCard = (member) => {
	const { name, role, email, img } = member;
	const markup = `
    <div class="card">
      <img src="./assets/${img}" alt="Portrait">
      <div class="card-text">
        <h3 class="name">${name}</h3>
        <p class="role">${role}</p>
        <a href="mailto:${email}">${email}</a>
      </div>
    </div>
  `;
	return markup;
};

// Select members element
const membersElement = document.getElementById("members");

// Build a card for each team member and add to html
for (let i = 0; i < teamMembers.length; i++) {
	membersElement.innerHTML += buildCard(teamMembers[i]);
}
