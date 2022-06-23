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
    const firstname_const = get_const(firstname.split(''));

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
        /* case 'a':
            const_data.push(); */
        /* case 'b':
            const_data.push(); */
        /* case 'c':
            const_data.push(); */
        /* case 'd':
            const_data.push(); */
        /* case 'e':
            const_data.push(); */
        /* case 'f':
            const_data.push(); */
        /* case 'g':
            const_data.push(); */
        /* case 'h':
            const_data.push(); */
        /* case 'i':
            const_data.push(); */
        /* case 'j':
            const_data.push(); */
        /* case 'k':
            const_data.push(); */
        /* case 'l':
            const_data.push(); */
        /* case 'm':
            const_data.push(); */
        /* case 'n':
            const_data.push(); */
        /* case 'o':
            const_data.push(); */
        /* case 'p':
            const_data.push(); */
        /* case 'q':
            const_data.push(); */
        /* case 'r':
            const_data.push(); */
        /* case 's':
            const_data.push(); */
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
