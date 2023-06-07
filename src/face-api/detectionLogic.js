import * as faceapi from "face-api.js";

async function startDetection(videoRef) {
  //await loadScript('/src/face-api/face-api.min.js');

  await Promise.all([
    faceapi.nets.faceRecognitionNet.loadFromUri("models"),
    faceapi.nets.faceLandmark68Net.loadFromUri("models"),
    faceapi.nets.ssdMobilenetv1.loadFromUri("models"),
  ]);

  start(videoRef);
}

async function start(videoRef) {
  
  // Cargar imagen
  const img = await faceapi.fetchImage("images/ModelImage.jpeg");

  // Detectar caras en la imagen
  const detections = await faceapi
    .detectAllFaces(img)
    .withFaceLandmarks()
    .withFaceDescriptors();

  // Convertir detecciones a objetos reconocibles
  const labeledDescriptors = [
    new faceapi.LabeledFaceDescriptors(
      "Imagen de ejemplo",
      detections.map((d) => d.descriptor)
    ),
  ];

  // Entrenar modelo con objetos reconocibles

  //0.4 es el umbral que se toma para saber si es el mismo rostro, es decir, si el valor está entre 0 y 0.4
  //Se considera que es el mismo rostro

  //Entre más cercano sea el valor a 0 entonces más es la similitud
  const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.5);

  // Iniciar cámara
  navigator.getUserMedia(
    { video: {} },
    (stream) => {
      const video = document.getElementById("video");
      video.srcObject = stream;

      // Detectar caras en tiempo real
      setInterval(async () => {
        const detections = await faceapi
          .detectAllFaces(video)
          .withFaceLandmarks()
          .withFaceDescriptors();
          let bestMatch = "";
          try{
            bestMatch = faceMatcher.findBestMatch(detections[0].descriptor);
          }catch(error){}
        
        console.log("Best Match", bestMatch.toString());
        if (bestMatch._distance <= 0.5 && bestMatch._distance >= 0) {
          console.log("El rostro coincide");
        } else {
          console.log("El rostro no coincide");
        }
      }, 1000);
    },
    (err) => console.error(err)
  );
}

export { startDetection };
