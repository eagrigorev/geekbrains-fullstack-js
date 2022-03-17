const CHARACTERS = "0123456789abcdef";

const colorGen = () => {
    let randomColor = "";
    const charactersLength = CHARACTERS.length;
    for (let i = 0; i < 6; i++) {
        randomColor += CHARACTERS.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return randomColor;
};

exports.colorGen = colorGen;
