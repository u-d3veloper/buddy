const calculator = (test, weight, gender, mass) => {
    let r = gender === "male" ? 0.68 : 0.55;

    const rate = mass / (weight * r);

    const maxRate = test ? 0.2 : 0.5;

    return {
        rate,
        isAbove: rate >= maxRate,
    };
};

export default calculator;
