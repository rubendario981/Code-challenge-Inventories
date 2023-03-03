# Code challenge inventories - Client side
#### This is the client side of a project about a page wich your purpose is take records about inventories of some fixed assets, which was developed using the ReactJs and is connected to a server made with Node.js.


## How to get the project
- Clone the repository on your local computer:
  > git clone https://github.com/rubendario981/Code-challenge-Inventories.git

#

## How to setup 
1. Keep in mind it necesary have running the server side in this same project.
1. Make sure have an Access token from Mapbox page https://www.mapbox.com/
1. In a terminal go to the folder downloaded, then go to server folder and install project dependencis
    > cd 'yourlocalfolderdownloades'/client
    > npm install
1. Configure environment variables in the file .env
    > VITE_MAPBOX_KEY=yourapikey.

    > VITE_URL_HOST=yourserveradrresshost:port

1. And run the project
    > npm run dev
1. Finally open a web browser and default vite configuration allow the application to open in
    > http://localhost:5173/.