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
    if(firstname.length) {
        const data = get_const(firstname.toLowerCase().split(""));

        console.log(`output: ${data.const} - ${JSON.stringify(data.infos)}`);
    }
};

const get_const = (letters = Array) => {
    console.log(`input: ${letters}`);

    // Store constants of each letters of the firstname
    let const_data = [];

    // Store some constants info
    let const_infos = {};

    // Assign each letter to a constant, fallback to 1 if no one has been found
    let position = 0;
    letters.forEach(letter => {
        position++;
        switch (letter) {
            case "a":
                const_data.push(0.373955 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Artin%27s_conjecture_on_primitive_roots"
                };
                break;
            case "b":
                const_data.push(1.456074 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Backhouse%27s_constant"
                };
                break;
            case "c":
                const_data.push(1.46707807943397547289 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Porter%27s_constant"
                };
                break;
            case "d":
                const_data.push(0.73908513321516064165 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Dottie_number"
                };
                break;
            case "e":
                const_data.push(1.606695 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Erd%C5%91s%E2%80%93Borwein_constant"
                };
                break;
            case "f":
                const_data.push(2.807770 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Frans%C3%A9n%E2%80%93Robinson_constant"
                };
                break;
            case "g":
                const_data.push(0.834626 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Gauss%27s_constant"
                };
                break;
            /* case "h":
                const_data.push(x ** position);
                const_infos[letter] = {
                    "wikipedia": ""
                };
                const_infos[letter] = {
                    "wikipedia": ""
                };
                break; */
            /* case "i":
                const_data.push(x ** position);
                const_infos[letter] = {
                    "wikipedia": ""
                };
                break; */
            /* case "j":
                const_data.push(x ** position);
                const_infos[letter] = {
                    "wikipedia": ""
                };
                break; */
            case "k":
                const_data.push(0.764223 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Landau%E2%80%93Ramanujan_constant"
                };
                break;
            case "l":
                const_data.push(0.97027011439203392574 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Lochs%27s_theorem"
                };
                break;
            case "m":
                const_data.push(0.261497 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Meissel%E2%80%93Mertens_constant"
                };
                break;
            /* case "n":
                const_data.push(x ** position);
                const_infos[letter] = {
                    "wikipedia": ""
                };
                break; */
            /* case "o":
                const_data.push(x ** position);
                const_infos[letter] = {
                    "wikipedia": ""
                };
                break; */
            case "p":
                const_data.push(2.29558714939263807403 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Universal_parabolic_constant"
                };
                break;
            case "q":
                const_data.push(0.28878809508660242127 ** position); // فلاجوليت وريتشموند
                const_infos[letter] = {
                    "oeis": {
                        "link": "https://oeis.org/A048651",
                        "name": "Decimal expansion of Product {k >= 1} (1 - 1/2^k)."
                    }
                };
                break;
            case "r":
                const_data.push(1.75793275661800453270 ** position);
                const_infos[letter] = {
                    "oeis": {
                        "link": "https://oeis.org/A072449",
                        "name": "Kasner number"
                    }
                };
                break;
            case "s":
                const_data.push(0.18785964246206712024 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/MRB_constant"
                };
                break;
            case "t":
                const_data.push(1.92756197548292530426 ** position);
                const_infos[letter] = {
                    "oeis": {
                        "link": "https://oeis.org/A086088",
                        "name": "Decimal expansion of the limit of the ratio of consecutive terms in the tetranacci sequence"
                    }
                };
                break;
            case "u":
                const_data.push(1.84775906502257351225 ** position);
                const_infos[letter] = {
                    "wikipedia": "https://en.wikipedia.org/wiki/Self-avoiding_walk"
                };
                break;
            /* case "v":
                const_data.push(x ** position);
                const_infos[letter] = {
                    "wikipedia": ""
                };
                break; */
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
            /* case "x":
                const_data.push(x ** position);
                const_infos[letter] = {
                    "wikipedia": ""
                };
                break; */
            /* case "y":
                const_data.push(x ** position);
                const_infos[letter] = {
                    "wikipedia": ""
                };
                break; */
            /* case "z":
                const_data.push(x ** position);
                const_infos[letter] = {
                    "wikipedia": ""
                };
                break; */

            default: // By default, equals to 1
                const_data.push(1);
        };
    });

    // Multiply all the constants together
    return {
        "const": const_data.reduce((x, y) => x * y),
        "infos": const_infos
    };
};
