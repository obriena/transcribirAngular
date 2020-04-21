// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  name: "Production",
  loginService: "http://localhost:9080/transcribir/authenticate",
  registrationService: "http://localhost:9080/transcribir/register",
  fileUploadService: "http://localhost:9080/transcribir/fileUpload",
  mediaService: "http://localhost:9080/transcribir/media/findAllForUser/",
  retrieveTranscriptService : "http://localhost:9080/transcribir/media/retrieveTranscript/",
  playMediaService: "http://localhost:9080/transcribir/media/playFileById/",
  updateMediaService: "http://localhost:9080/transcribir/mediaUpdate/",
  // loginService: "https://transcribirservices.herokuapp.com/transcribir/authenticate",
  // registrationService: "https://transcribirservices.herokuapp.com/transcribir/register",
  // fileUploadService: "https://transcribirservices.herokuapp.com/transcribir/fileUpload",
  // mediaService: "https://transcribirservices.herokuapp.com/transcribir/media/findAllForUser/",
  // playMediaService: "https://transcribirservices.herokuapp.com/transcribir/media/playFileById/"
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
