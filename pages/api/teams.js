export default function handler(req, res) {
    // Obtenim el locale de les capçaleres (Accept-Language) si no ve a la query
    const acceptLanguage = req.headers['accept-language'];
    let locale = req.query.locale || acceptLanguage?.split(',')[0] || 'en';
  
    let greeting;
    switch (locale) {
      case 'es':
        greeting = 'Hola, ¿cómo estás?';
        break;
      case 'ca':
        greeting = 'Salut, comment ça va ?';
        break;
      case 'en':
      default:
        greeting = 'Hello, how are you?';
        break;
    }
  
    res.status(200).json({ message: greeting });
  }


/// La crida és : /api/teams?slug=${slug}
//{slug:"",name:"",mainColor:"",secondColor:"",shieldURL:"",homeKitURL:"",awayKitUrl:"",description:"",mainPlayer:""}
/// const teams = [
///    {slug:"vapor",name:"CE El Vapor",mainColor:"black",secondColor:"white",description:"",mainPlayer:"Fàtima (8)"}
///];