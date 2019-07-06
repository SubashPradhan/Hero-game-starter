// Write your JS here
const hero = {
    name: "Subash",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "Knife",
        damage: 2
    }
}

//Creating alert and returning object
function rest(object) {
    let newHealth = object.health
    if (newHealth == 10) {
        alert('You are ready to go')
        return this.health
    }
    object.health = 10
    return object;
}

//Getting and setting image
const mochaImg = document.getElementById("mocha")
let link = 'https://cdn.xl.thumbs.canstockphoto.be/3d-man-met-sleutels-stock-illustraties_csp7131107.jpg'
const img = document.createElement('img')
img.src = link;
img.id = 'inn';
img.alt = 'newImage';

let innUI = document.getElementById('inn')
img.addEventListener('click', resetHealth)
mochaImg.appendChild(img)

// Reset health back to 10 onclick
function resetHealth(event) {
    return hero.health = 10;
}

// Pickup Item Function
function pickUpItem(object2, newWeapon) {
    return object2.inventory.push(newWeapon)
}

// Second Picture
let link_2 = 'https://images-na.ssl-images-amazon.com/images/I/41DeqznqpYL._SX425_.jpg'
const img_2 = document.createElement('img')
img_2.src = link_2;
img_2.id = 'dagger';
img_2.alt = 'ImageDagger';

let dagger = document.getElementById('dagger')
mochaImg.appendChild(img_2)
img_2.addEventListener('click', addDagger)

// Adding Dagger through picture
function addDagger(event) {
    hero.inventory.push({ type: 'dagger', damage: 2 })
    return true
}

// Weapon equipment funtion
function equipWeapon(object3) {
    if (object3.inventory.length === 0) {
        return null
    }
    object3.weapon = object3.inventory[0]
    return true
}
//Third Picture
let link_3 = 'https://img1.cohimg.net/is/image/Coach/58298_liblk_a0?fmt=jpg&wid=680&hei=885&bgc=f0f0f0&fit=vfit&qlt=75'
const img_3 = document.createElement('img')
img_3.src = link_3;
img_3.id = 'bag';
img_3.alt = 'ImageBag';

let bag = document.getElementById('bag')
mochaImg.appendChild(img_3)
img_3.addEventListener('click', takeWeapon)


/// Last function for equipment
function takeWeapon(event) {
    hero.weapon = hero.inventory[0]
}

