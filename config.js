var driveSlides = 9;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = true;

// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 11;
var followBearing = -0.16;
var followPitch = 45;

var config = {
    style: 'mapbox://styles/ctrnslv/ckrt5wpw02h2x18mn0a2896hc',
    accessToken: 'pk.eyJ1IjoiY3RybnNsdiIsImEiOiJja3Jpd2tkeHgzN3pyMnVwOGpjcHJ1ODhoIn0.JucVmRdpKDMRmSbHVA9wtg',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: false,
    //title: 'SENTINELLE',
    //subtitle: 'In viaggio tra le tappe dell\'inchiesta',
    //byline: 'By Anna Berti Suman',
    //footer: 'August 2021.',
    chapters: [
        {
            id: 'slide-0',
            alignment: 'center',
            hidden: false,
            title: 'Ascolta l\'audio mentre scorri verso il basso fermandoti sui punti che raggiungerà la linea.',
            description: '<audio controls> <source src="mix_10m11s.mp3" type="audio/mpeg"></audio>',
            location: {
              //center: [16.86650, 41.12933],
              //zoom: 10,
              //pitch: 45,
              //bearing: -0.16
            },
            //mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
                ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
      {
            id: 'drive-slide-0',
            alignment: 'left',
            hidden: true,
            title: 'Laveno',
            //image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
          description: 'Cominicia l inchiesta, diretta verso le terre lucane, con lentezza...',
            location: {
                // //center: [16.86650, 41.12933],
                // zoom: 11.29,
                // pitch: 45,
                // bearing: -0.16
            },
            //mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
      id: 'drive-slide-1',
      alignment: 'left',
      hidden: true,
      title: 'Roma',
      //image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
      description: 'Nello zaino, lo stretto indispensabile e un ispirazione, il libro di Alliegro Totem Nero',
      location: {
          //center: [16.74949, 41.04042],
          //zoom: 13.34,
          //pitch: 45,
          //bearing: -0.78
      },
      //mapAnimation: 'flyTo',
      rotateAnimation: true,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
},
{
      id: 'drive-slide-2',
      alignment: 'left',
      hidden: true,
      title: 'Bari',
      //image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
      description: 'Nello zaino, lo stretto indispensabile e un ispirazione, il libro di Alliegro Totem Nero',
      location: {
          // //center: [16.76992, 40.88505],
          // zoom: 16,
          // pitch: 45,
          // bearing: -0.36
      },
      //mapAnimation: 'flyTo',
      rotateAnimation: true,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
          id: 'drive-slide-3',
          alignment: 'left',
          hidden: true,
          title: 'Bitetto',
          image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
          description: 'Durante il cammino, ascolto la canzone composta da un cantautore per l inchiesta, al suon di musica avanzo nella murgia afosa',
          location: {
              // center: [16.75535, 40.79241],
              // zoom: 13.34,
              // pitch: 45,
              // bearing: 0
          },
          //mapAnimation: 'flyTo',
          rotateAnimation: true,
          callback: '',
          onChapterEnter: [],
          onChapterExit: []
        },
        {
              id: 'drive-slide-4',
              alignment: 'left',
              hidden: true,
              title: 'Cassano delle Murge',
              //image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
              description: 'Stridenti contrasti tra un cammino curato e ben segnato, e cumuli di rifiuti che marciscono accanto agli ulivi mi fanno presagire il sapore dell inchiesta',
              location: {
                  // center: [16.75535, 40.79241],
                  // zoom: 13.34,
                  // pitch: 45,
                  // bearing: 0
              },
              //mapAnimation: 'flyTo',
              rotateAnimation: false,
              callback: '',
              onChapterEnter: [],
              onChapterExit: []
            },
            {
                  id: 'drive-slide-5',
                  alignment: 'true',
                  hidden: true,
                  title: 'Santeremo',
                  //image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                  description: 'Incontro Mimmo, sentinella lucana che mi accompagnerà nel percorso dell inchiesta',
                  location: {
                      // center: [16.42194, 40.81895],
                      // zoom: 13.34,
                      // pitch: 45,
                      // bearing: 0
                  },
                  //mapAnimation: 'flyTo',
                  rotateAnimation: false,
                  callback: '',
                  onChapterEnter: [],
                  onChapterExit: []
                },
                {
                      id: 'drive-slide-6',
                      alignment: 'left',
                      hidden: true,
                      title: 'Altamura',
                      image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                      description: 'Incontro Nico, insegnante a scuola e sentinella, che mi racconta delle battaglie del Movimento Tutela Val Basento',
                      location: {
                          // center: [16.55015, 40.39003],
                          // zoom: 15.17,
                          // pitch: 45,
                          // bearing: 0
                      },
                      //mapAnimation: 'flyTo',
                      rotateAnimation: false,
                      callback: '',
                      onChapterEnter: [],
                      onChapterExit: []
                    },
                    {
                          id: 'drive-slide-7',
                          alignment: 'left',
                          hidden: true,
                          title: 'Gravina',
                          image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                          description: 'Intervisto l Avvocato Di Pisa, che difende le parti civili nel processo Petrolgate',
                          location: {
                              // center: [16.55705, 40.39058],
                              // zoom: 15.17,
                              // pitch: 45,
                              // bearing: 0
                          },
                          //mapAnimation: 'flyTo',
                          rotateAnimation: false,
                          callback: '',
                          onChapterEnter: [],
                          onChapterExit: []
                        },
                        {
                              id: 'drive-slide-7',
                              alignment: 'left',
                              hidden: true,
                              title: 'Pisticci',
                              image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                              description: 'Mi presento alla comunità di Pisticci nella loro Chiesa e ascolto le loro voci e denunce',
                              location: {
                                  // center: [16.55847,40.39042],
                                  // zoom: 15.17,
                                  // pitch: 45,
                                  // bearing: 0
                              },
                              //mapAnimation: 'flyTo',
                              rotateAnimation: false,
                              callback: '',
                              onChapterEnter: [],
                              onChapterExit: []

                                                                                          }
                                                                                        ]
                                                                                 };
