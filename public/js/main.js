window.addEventListener("load", () => main());

// Get input area
const input = document.getElementById("firstname");

const main = () => {

    // Reset content of the input
    input.value = "";

    // Create the paragraph of the first name
    const string_firstname = document.createElement("div");
    string_firstname.className = "firstname-constant-string";

    // Create the paragraph of the constant
    const double_firstname = document.createElement("p");
    double_firstname.className = "firstname-constant-double";

    // Add the elements to the page
    const firstname_constant = document.getElementsByClassName("firstname-constant").item(0);
    firstname_constant.append(string_firstname);
    firstname_constant.append(double_firstname);

    // Fill informations with placeholder
    updateConst();

    // Call callback when editing the input
    input.addEventListener("input", updateConst);
};

// Callback: called when first name is changed
const updateConst = () => {
    const firstname = input.value.trim().toLowerCase();
    if (firstname.length) {
        const data = getConst(firstname);

        setString(firstname.replace(/^\w/, (c) => c.toUpperCase()), data.infos);
        getDouble().textContent = data.const;
    } else {
        defaultInfos();
    }
};

// Define the string who show the firstname
const setString = (firstname = String, data = Object) => {
    const string_div = document.getElementsByClassName("firstname-constant-string").item(0);

    // Reset the string data
    string_div.innerHTML = "";

    // For each letter of the first name
    firstname.split("").forEach(letter_value => {
        // Create the letter
        const letter = document.createElement("p");
        const infos  = document.createElement("span");

        // Fill elements with data
        letter.textContent = letter_value;
        Object.keys(data[clearText(letter_value)]).forEach(key => {
            const link = document.createElement("a");
            link.href = data[clearText(letter_value)][key];
            link.innerText = key;
            infos.append(link);
        });

        // Change parameter of tags
        infos.hidden = true;
        infos.style.position = "absolute";

        // Link info to the letter
        letter.append(infos);

        // Add the letter
        string_div.append(letter);

        // Add behaviour when clicking on letters
        letter.addEventListener("mouseenter", (e) => e.target.firstElementChild.hidden = false);
        letter.addEventListener("mouseleave", (e) => e.target.firstElementChild.hidden = true);
    });
};

// Get the paragraph of the constant
const getDouble = () => {
    return document.getElementsByClassName("firstname-constant-double").item(0);
};

// Set the paragraph of the name to the placeholder
const defaultInfos = () => {
    // Retrieve the constant from the default first name
    const data = getConst(input.placeholder);

    // Define the string
    setString(input.placeholder, data.infos);

    // Define the constant
    getDouble().textContent = data.const;
};

// Remove accent and lower the string
const clearText = (string = String) => {
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

const getConst = (letters = String) => {
    // Turn letters to an array
    const letters_array = clearText(letters).split("");

    // Store constants of each letters of the first name
    const const_data = [];

    // Store some constants info
    const const_infos = {};

    // Assign each letter to a constant, fallback to 1 if no one has been found
    let position = 0;
    letters_array.forEach(letter => {
        position++;
        switch (letter) {
            case "a":
                const_data.push(1.2824271291006226 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/Glaisher%E2%80%93Kinkelin_constant"
                };
                break;
            case "b":
                const_data.push(1.456074 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/Backhouse%27s_constant"
                };
                break;
            case "c":
                const_data.push(299792458 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/Speed_of_light"
                };
                break;
            case "d":
                const_data.push(0.7390851332151606 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/Dottie_number"
                };
                break;
            case "e":
                const_data.push(2.718281828459045 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/E_(mathematical_constant)"
                };
                break;
            case "f":
                const_data.push(2.807770242028519 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/Frans%C3%A9n%E2%80%93Robinson_constant"
                };
                break;
            case "g":
                const_data.push(0.8346268416740731 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/Gauss%27s_constant"
                };
                break;
            case "h":
                const_data.push(6.62607015e-34 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/Planck_constant"
                };
                break;
            case "i":
                const_data.push(0.20787957635076190 ** position);
                const_infos[letter] = {
                    "oeis": "https://oeis.org/A049006"
                };
                break;
            case "j":
                const_data.push(5.5208e27 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/J/psi_meson"
                };
                break;
            case "k":
                const_data.push((-273.15) ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/Kelvin"
                };
                break;
            case "l":
                const_data.push(0.97027011439203392 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/Lochs%27s_theorem"
                };
                break;
            case "m":
                const_data.push(0.2614972128476427 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/Meissel%E2%80%93Mertens_constant"
                };
                break;
            case "n":
                const_data.push(6.02214076e+23 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/Avogadro_constant"
                };
                break;
            case "o":
                const_data.push(1.66168794963359412 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/Somos%27_quadratic_recurrence_constant"
                };
                break;
            case "p":
                const_data.push(2.295587149392638 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/Universal_parabolic_constant"
                };
                break;
            case "q":
                const_data.push(1.8755459e-18 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/Planck_units#History_and_definition"
                };
                break;
            case "r":
                const_data.push(2625374126407687e2 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/Heegner_number#Almost_integers_and_Ramanujan.27s_constant"
                };
                break;
            case "s":
                const_data.push(0.1878596424620671 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/MRB_constant"
                };
                break;
            case "t":
                const_data.push(1.927561975482925 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/Generalizations_of_Fibonacci_numbers#Tetranacci_numbers"
                };
                break;
            case "u":
                const_data.push(1.8477590650225735 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/Self-avoiding_walk"
                };
                break;
            case "v":
                const_data.push(0.4221577331158266 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/Reuleaux_tetrahedron"
                };
                break;
            case "w":
                const_data.push(2.0945514815423265 ** position);
                const_infos[letter] = {
                    "OEIS": "https://oeis.org/A007493"
                };
                break;
            case "x":
                const_data.push(1.0021e-13 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/X_unit"
                };
                break;
            case "y":
                const_data.push(0.5772156649015328 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/Euler%27s_constant"
                };
                break;
            case "z":
                const_data.push(376.730313668 ** position);
                const_infos[letter] = {
                    "Wikipedia": "https://en.wikipedia.org/wiki/Impedance_of_free_space"
                };
                break;

            default: // By default, equals to 1
                const_data.push(1);
        }
    });

    return {
        // Multiply all the constants together
        "const": const_data.reduce((x, y) => x * y),
        "infos": const_infos
    };
};
