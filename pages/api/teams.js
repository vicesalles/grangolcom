export default (req, res) => {
    // Obtenim el slug des dels paràmetres de consulta
    const { slug, locale } = req.query;

    console.log("locale: "+locale);

    // Equips
    const teams = [
        {slug:"vapor",name:"CE El Vapor",mainColor:"black",secondColor:"white",description:"",mainPlayer:"Fàtima (8)"}
    ];

    const equips = [];
    const equipos = [];

    if (!slug) {
        res.status(200).json(teams);
    } else {

    // Trobar l'equip que coincideixi amb el slug
    const team = teams.find(item => item.slug === slug);

    if (team) {
        res.status(200).json(team);
    } else {
        res.status(404).json({ message: 'Exemple no trobat' });
    }

    }
}


/// La crida és : /api/teams?slug=${slug}
//{slug:"",name:"",mainColor:"",secondColor:"",shieldURL:"",homeKitURL:"",awayKitUrl:"",description:"",mainPlayer:""}