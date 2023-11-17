const image = document.createElement('img');

image.setAttribute("src", "https://pop.proddigital.com.br/wp-content/uploads/sites/8/2022/10/f.jpg");
image.setAttribute("alt", "naruto-banner");

const h1 = document.createElement('h1');
h1.textContent = "Naruto Next Generations!";
h1.classList.add('hello');

const p = document.createElement("p");
p.textContent = "Relive the greatest moments again from one of the most beloved and popular series from the 2000's!!!";

export {
    image,
    h1,
    p
};