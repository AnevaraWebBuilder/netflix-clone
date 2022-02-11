const faqs = document.querySelector('.questions-list');

const question1 = faqs.children[0];
const answer1 = faqs.children[1];
const plus1 = question1.children[0];

const question2 = faqs.children[2];
const answer2 = faqs.children[3];
const plus2 = question2.children[0]

const question3 = faqs.children[4];
const answer3 = faqs.children[5];
const plus3 = question3.children[0];

const question4 = faqs.children[6];
const answer4 = faqs.children[7];
const plus4 = question4.children[0]

const question5 = faqs.children[8];
const answer5 = faqs.children[9];
const plus5 = question5.children[0];

const question6 = faqs.children[10];
const answer6 = faqs.children[11];
const plus6 = question6.children[0];


question1.addEventListener('click', function (){
	if (answer1.classList.contains('hidden')) {
		answer1.classList.remove('hidden');
		plus1.style.transform = "rotate(45deg)";
	}else{
		answer1.classList.add('hidden');
		plus1.style.transform = "rotate(0deg)";
	}
})

question2.addEventListener('click', function(){
	if (answer2.classList.contains('hidden')) {
		answer2.classList.remove('hidden');
		plus2.style.transform = "rotate(45deg)";
	}else{
		answer2.classList.add('hidden');
		plus2.style.transform = "rotate(0deg)";
	}
})

question3.addEventListener('click', function(){
	if (answer3.classList.contains('hidden')) {
		answer3.classList.remove('hidden');
		plus3.style.transform = "rotate(45deg)";
	}else{
		answer3.classList.add('hidden');
		plus3.style.transform = "rotate(0deg)";
	}
})

question4.addEventListener('click', function(){
	if (answer4.classList.contains('hidden')) {
		answer4.classList.remove('hidden');
		plus4.style.transform = "rotate(45deg)";
	}else{
		answer4.classList.add('hidden');
		plus4.style.transform = "rotate(0deg)";
	}
})

question5.addEventListener('click', function(){
	if (answer5.classList.contains('hidden')) {
		answer5.classList.remove('hidden');
		plus5.style.transform = "rotate(45deg)";
	}else{
		answer5.classList.add('hidden');
		plus5.style.transform = "rotate(0deg)";
	}
})

question6.addEventListener('click', function(){
	if (answer6.classList.contains('hidden')) {
		answer6.classList.remove('hidden');
		plus6.style.transform = "rotate(45deg)";
	}else{
		answer6.classList.add('hidden');
		plus6.style.transform = "rotate(0deg)";
	}
})