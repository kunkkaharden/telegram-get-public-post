const axios = require('axios');
const getPost = async function(enlace) {
    return await loadData(enlace);
}

module.exports = getPost;

async function loadData(enlace) {
    const url = "https://t.me/" + enlace + "?embed=1&userpic=false";
    const response = await axios.post(url); 
    const lineas = response.data.split("\n");
    const foto = /<a class="tgme_widget_message_photo_wrap/;
    const mensaje = /<div class="tgme_widget_message_text js-message_text/;
    const imageF = lineas.find((e) => {
      return e.match(foto);
    });
    const text = lineas.find((e) => {
      return e.match(mensaje);
    });
    
    return {
        image: imageF ? getImage(imageF) : "",
        text
    }
}
function getImage(image) {
  const inicio = "https://cdn1";
  const fin = ".jpg";
  const pos1 = image.indexOf(inicio);
  const pos2 = image.indexOf(fin);
  const imagen = image.substring(pos1, pos2 + 5);
  return imagen;
}
  