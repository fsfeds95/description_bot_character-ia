document.getElementById('contact').addEventListener('submit', function(e) {
 e.preventDefault();

var name = document.getElementById('name').value || 'Unknown';
var last_name = document.getElementById('last_name').value || 'Unknown';
var age = document.getElementById('age').value || 'Unknown';
var birthday = document.getElementById('birthday').value || 'Unknown';
var gender = document.getElementById('gender').value || 'Unknown';
var sexuality = document.getElementById('sexuality').value || 'Unknown';
var species = document.getElementById('species').value || 'Unknown';
var nationality = document.getElementById('nationality').value || 'Unknown';
var ethnicity = document.getElementById('ethnicity').value || 'Unknown';
var appearance = document.getElementById('appearance').value || 'Unknown';
var height = document.getElementById('height').value || 'Unknown';
var weight = document.getElementById('weight').value || 'Unknown';
var eyes = document.getElementById('eyes').value || 'Unknown';
var hair = document.getElementById('hair').value || 'Unknown';
var body = document.getElementById('body').value || 'Unknown';
var ears = document.getElementById('ears').value || 'Unknown';
var face = document.getElementById('face').value || 'Unknown';
var skin = document.getElementById('skin').value || 'Unknown';
var personality = document.getElementById('personality').value || 'Unknown';
var moral_alignment = document.getElementById('moral_alignment').value || 'Unknown';
var archtype = document.getElementById('archtype').value || 'Unknown';
var tempermant = document.getElementById('tempermant').value || 'Unknown';
var likes = document.getElementById('likes').value || 'Unknown';
var dislikes = document.getElementById('dislikes').value || 'Unknown';
var hobbies = document.getElementById('hobbies').value || 'Unknown';
var fears = document.getElementById('fears').value || 'Unknown';
var flaws = document.getElementById('flaws').value || 'Unknown';
var strengths = document.getElementById('strengths').value || 'Unknown';
var weaknesses = document.getElementById('weaknesses').value || 'Unknown';
var values = document.getElementById('values').value || 'Unknown';
var disabilities = document.getElementById('disabilities').value || 'Unknown';
var mental_disorders = document.getElementById('mental_disorders').value || 'Unknown';
var illnesses = document.getElementById('illnesses').value || 'Unknown';
var allergies = document.getElementById('allergies').value || 'Unknown';
var medication = document.getElementById('medication').value || 'Unknown';
var blood_type = document.getElementById('blood_type').value || 'Unknown';
var mother = document.getElementById('mother').value || 'Unknown';
var father = document.getElementById('father').value || 'Unknown';
var siblings = document.getElementById('siblings').value || 'Unknown';
var uncles = document.getElementById('uncles').value || 'Unknown';
var aunts = document.getElementById('aunts').value || 'Unknown';
var grandmothers = document.getElementById('grandmothers').value || 'Unknown';
var grandfathers = document.getElementById('grandfathers').value || 'Unknown';
var cousins = document.getElementById('cousins').value || 'Unknown';
var nephews = document.getElementById('nephews').value || 'Unknown';
var nieces = document.getElementById('nieces').value || 'Unknown';
var love_interest = document.getElementById('love_interest').value || 'Unknown';
var friends = document.getElementById('friends').value || 'Unknown';
var enemies = document.getElementById('enemies').value || 'Unknown';
var pets = document.getElementById('pets').value || 'Unknown';
var residence = document.getElementById('residence').value || 'Unknown';
var place_of_birth = document.getElementById('place_of_birth').value || 'Unknown';
var career = document.getElementById('career').value || 'Unknown';
var car = document.getElementById('car').value || 'Unknown';
var house = document.getElementById('house').value || 'Unknown';
var religion = document.getElementById('religion').value || 'Unknown';
var social_class = document.getElementById('social_class').value || 'Unknown';
var education = document.getElementById('education').value || 'Unknown';
var languages = document.getElementById('languages').value || 'Unknown';
var iq = document.getElementById('iq').value || 'Unknown';
var daily_routine = document.getElementById('daily_routine').value || 'Unknown';


var data = `{{char}}= description= {Name: ["${name}"], Last name: ["${last_name}"], Age: ["${age}"], Birthday: ["${birthday}"], Gender: ["${gender}"], Sexuality: ["${sexuality}"], Species: ["${species}"], Nationality: ["${nationality}"], Ethnicity: ["${ethnicity}"], Appearance: ["${appearance}"], Height: ["${height}"], Weight: ["${weight}kg"], Eyes: ["${eyes}"], Hair: ["${hair}"], Body: ["${body}"], Ears: ["${ears}"], Face: ["${face}"], Skin: ["${skin}"], Personality: ["${personality}"], Moral Alignment: ["${moral_alignment}"], Archtype: ["${archtype}"], Tempermant: ["${tempermant}"], Likes: ["${likes}"], Dislikes: ["${dislikes}"], Hobbies: ["${hobbies}"], Fears: ["${fears}"], Flaws: ["${flaws}"], Strengths: ["${strengths}"], Weaknesses: ["${weaknesses}"], Values: ["${values}"], Disabilities: ["${disabilities}"], Mental Disorders: ["${mental_disorders}"], Illnesses: ["${illnesses}"], Allergies: ["${allergies}"], Medication: ["${medication}"], Blood Type: ["${blood_type}"], Mother: ["${mother}"], Father: ["${father}"], Siblings: ["${siblings}"], Uncles: ["${uncles}"], Aunts: ["${aunts}"], Grandmothers: ["${grandmothers}"], Granfathers: ["${grandfathers}"], Cousins: ["${cousins}"], Nephews: ["${nephews}"], Nieces: ["${nieces}"], Love Interest: ["${love_interest}"], Friends: ["${friends}"], Enemies: ["${enemies}"], Pets: ["${pets}"], Residence: ["${residence}"], Place of Birth: ["${place_of_birth}"], Career: ["${career}"], Car: ["${car}"], House: ["${house}"], Religion: ["${religion}"], Social Class: ["${social_class}"], Education: ["${education}"], Languages: ["${languages}"], IQ: ["${iq}"], Daily Routine: ["${daily_routine}"]}
END_OF_DIALOG`;

 var blob = new Blob([data], { type: 'text/plain' });
 var url = URL.createObjectURL(blob);

 var link = document.createElement('a');
 link.download = name + '.txt';
 link.href = url;
 link.click();
});