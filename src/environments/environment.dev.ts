export const environment = {
    production: false,
    name: "Development",
    loginService: "http://localhost:9080/transcribir/authenticate",
    registrationService: "http://localhost:9080/transcribir/register",
    fileUploadService: "http://localhost:9080/transcribir/fileUpload",
    mediaService: "http://localhost:9080/transcribir/media/findAllForUser/",
    retrieveTranscriptService : "http://localhost:9080/transcribir/media/retrieveTranscript/",
    playMediaService: "http://localhost:9080/transcribir/media/playFileById/",
    updateMediaService: "http://localhost:9080/transcribir/mediaUpdate/",
  };
  