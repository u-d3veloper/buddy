const calculator = (probatoire, poids, sexe, masse) => {
    let r = sexe === "masculin" ? 0.68 : 0.55;

    const taux = masse / (poids * r);

    const taux_max = probatoire ? 0.2 : 0.5;

    return {
        taux,
        estAuDelaDuSeuil: taux >= taux_max,
    };
};

export default calculator;
