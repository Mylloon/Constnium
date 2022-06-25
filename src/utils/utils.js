const randomFirstname = () => {
    const firstnames = [
        "Sarah",
        "Emma",
        "Laura",
        "Chloé",
        "Marie",
        "Emily",
        "Léa",
        "Camille",
        "Anna",
        "Manon",
        "Alex",
        "Thomas",
        "David",
        "Daniel",
        "Kévin",
        "Michael",
        "Nicolas",
        "James",
        "John",
        "Lucas"
    ];
    return firstnames[Math.floor(Math.random() * firstnames.length)];
};

module.exports = {
    randomFirstname
};
