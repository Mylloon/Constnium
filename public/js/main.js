window.addEventListener("load", () => main());

const input_name = "firstname";

const main = () => {
    // Reset content of the input
    document.getElementById(input_name).value = "";

    // Call callback when editing the input
    document.getElementById(input_name).addEventListener("input", update_const);
};

// Callback: called when firstname is changed
const update_const = () => {
    const firstname = document.getElementById(input_name).value;
    const firstname_const = get_const(firstname.toLowerCase().split(''));

    console.log(`output: ${firstname_const}`);
};

const get_const = (letters = Array) => {
    console.log(`input: ${letters}`);

    // Store constants of each letters of the firstname
    let const_data = [];

    // Store some constants info
    //let const_infos = {};

    // Assign each letter to a const, fallback to 1 if no one has been found
    switch (letters) {
        case 'a': // https://en.wikipedia.org/wiki/Artin%27s_conjecture_on_primitive_roots
            const_data.push(0.373955);
        case 'b': // https://en.wikipedia.org/wiki/Backhouse%27s_constant
            const_data.push(1.456074);
        case 'c': // https://en.wikipedia.org/wiki/Porter%27s_constant
            const_data.push(1.46707807943397547289);
        /* case 'd':
            const_data.push(); */
        case 'e': // https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Borwein_constant
            const_data.push(1.606695);
        case 'f': // https://en.wikipedia.org/wiki/Frans%C3%A9n%E2%80%93Robinson_constant
            const_data.push(2.807770);
        case 'g': // https://en.wikipedia.org/wiki/Gauss%27s_constant
            const_data.push(0.834626);
        /* case 'h':
            const_data.push(); */
        /* case 'i':
            const_data.push(); */
        /* case 'j':
            const_data.push(); */
        case 'k': // https://en.wikipedia.org/wiki/Landau%E2%80%93Ramanujan_constant
            const_data.push(0.764223);
        case 'l': // https://en.wikipedia.org/wiki/Lochs%27s_theorem
            const_data.push(0.97027011439203392574);
        case 'm': // https://en.wikipedia.org/wiki/Meissel%E2%80%93Mertens_constant
            const_data.push(0.261497);
        /* case 'n':
            const_data.push(); */
        /* case 'o':
            const_data.push(); */
        case 'p': // https://en.wikipedia.org/wiki/Universal_parabolic_constant
            const_data.push(2.29558714939263807403);
        /* case 'q':
            const_data.push(); */
        /* case 'r':
            const_data.push(); */
        case 's': // https://en.wikipedia.org/wiki/MRB_constant
            const_data.push(0.18785964246206712024);
        /* case 't':
            const_data.push(); */
        /* case 'u':
            const_data.push(); */
        /* case 'v':
            const_data.push(); */
        /* case 'w':
            const_data.push(); */
        /* case 'x':
            const_data.push(); */
        /* case 'y':
            const_data.push(); */
        /* case 'z':
            const_data.push(); */

        default:
            const_data.push(1);
    }

    // Multiply all the constants together
    return const_data.reduce((a, b) => a * b);
};
