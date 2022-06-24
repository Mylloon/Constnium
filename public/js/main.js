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
    document.getElementsByClassName("firstname-constant").item(0).append(string_firstname);
    document.getElementsByClassName("firstname-constant").item(0).append(double_firstname);

    // Fill informations with placeholder
    updateConst();

    // Call callback when editing the input
    input.addEventListener("input", updateConst);
};

// Callback: called when first name is changed
const updateConst = () => {
    const firstname = input.value.trim().toLowerCase();
    if(firstname.length) {
        const data = getConst(firstname.split(""));

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
        const infos  = document.createElement("p");

        // Fill elements with data
        letter.textContent = letter_value;
        infos.textContent = JSON.stringify(data[letter_value.toLowerCase()]);

        // Change parameter of tag
        infos.style.visibility = "hidden";
        infos.style.position   = "absolute";

        // Link info to the letter
        letter.append(infos);

        // Add the letter
        string_div.append(letter);
    });
}

// Get the paragraph of the name
const getString = () => {
    return document.getElementsByClassName("firstname-constant-string").item(0);
}

// Get the paragraph of the constant
const getDouble = () => {
    return document.getElementsByClassName("firstname-constant-double").item(0);
}

// Set the paragraph of the name to the placeholder
const defaultInfos = () => {
    // Retrieve the constant from the default first name
    const data = getConst(input.placeholder.split(""));

    // Define the string
    setString(input.placeholder, data.infos);

    // Define the constant
    getDouble().textContent = data.const;
}

const getConst = (letters = Array) => {
    // Store constants of each letters of the first name
    const const_data = [];

    // Store some constants info
    const const_infos = {};

    // Assign each letter to a constant, fallback to 1 if no one has been found
    let position = 0;
    letters.forEach(letter => {
        position++;
        switch (letter) {
            case "a":
                const_data.push(1.28242712910062263687534256886979172 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Glaisher%E2%80%93Kinkelin_constant"
                };
                break;
            case "b":
                const_data.push(1.456074 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Backhouse%27s_constant"
                };
                break;
            case "c":
                const_data.push(299792458 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Speed_of_light"
                };
                break;
            case "d":
                const_data.push(0.73908513321516064165 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Dottie_number"
                };
                break;
            case "e":
                const_data.push(2.71828182845904523536028747135266250 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/E_(mathematical_constant)"
                };
                break;
            case "f":
                const_data.push(2,80777024202851936522150118655777293 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Frans%C3%A9n%E2%80%93Robinson_constant"
                };
                break;
            case "g":
                const_data.push(0.83462684167407318628142973279904680 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Gauss%27s_constant"
                };
                break;
            case "h":
                const_data.push(6.62607015e-34 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Planck_constant"
                };
                break;
            case "i":
                const_data.push(0.20787957635076190854695561983497877 ** position);
                const_infos[letter] = {
                    "oeis": {
                        "link": "https://oeis.org/A049006",
                        "name": "Decimal expansion of i^i"
                    }
                };
                break;
            case "j":
                const_data.push(5.5208e27 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/J/psi_meson"
                };
                break;
            case "k":
                const_data.push((-273.15) ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Kelvin"
                };
                break;
            case "l":
                const_data.push(0.97027011439203392574 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Lochs%27s_theorem"
                };
                break;
            case "m":
                const_data.push(0.26149721284764278375542683860869585 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Meissel%E2%80%93Mertens_constant"
                };
                break;
            case "n":
                const_data.push(6.02214076e+23 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Avogadro_constant"
                };
                break;
            case "o":
                const_data.push(1.66168794963359412129581892274995074 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Somos%27_quadratic_recurrence_constant"
                };
                break;
            case "p":
                const_data.push(2.29558714939263807403429804918949038 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Universal_parabolic_constant"
                };
                break;
            case "q":
                const_data.push(1.8755459e-18 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Planck_units#History_and_definition"
                };
                break;
            case "r":
                const_data.push(262537412640768743.999999999999250073  ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Heegner_number#Almost_integers_and_Ramanujan.27s_constant"
                };
                break;
            case "s":
                const_data.push(0.18785964246206712024851793405427323 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/MRB_constant"
                };
                break;
            case "t":
                const_data.push(1.92756197548292530426 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Generalizations_of_Fibonacci_numbers#Tetranacci_numbers"
                };
                break;
            case "u":
                const_data.push(1.84775906502257351225 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Self-avoiding_walk"
                };
                break;
            case "v":
                const_data.push(0.42215773311582662702 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Reuleaux_tetrahedron"
                };
                break;
            case "w":
                const_data.push(2.09455148154232659148 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/John_Wallis#Contributions_to_mathematics",
                    "oeis": {
                        "link": "https://oeis.org/A007493",
                        "name": "Decimal expansion of Wallis' number, the real root of x^3 - 2*x - 5"
                    }
                };
                break;
            case "x":
                const_data.push(1.0021e-13 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/X_unit"
                };
                break;
            case "y":
                const_data.push(0.57721566490153286060651209008240243 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Euler%27s_constant"
                };
                break;
            case "z":
                const_data.push(376.730313668 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Impedance_of_free_space"
                };
                break;

            default: // By default, equals to 1
                const_data.push(1);
        };
    });

    return {
        // Multiply all the constants together
        "const": const_data.reduce((x, y) => x * y),
        "infos": const_infos
    };
};
