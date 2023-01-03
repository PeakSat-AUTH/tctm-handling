## AcubeSAT mission control interface

This application is used to receive and send commands in cooperation with the [YAMCS application](https://gitlab.com/acubesat/ops/yamcs-instance). Its usage also covers showing graphs of all the telemetered variables (live and archived). Future updates will include the abilities to send commands and show multiple live telemetry values. 

## Table of contents

- [Installation](#installation)
- [Running Software](#running software)
- [Application description](#Application description)
  - [Dashboard](#Dashboard Page)
  - [Side navigation bar](#side navigation bar)
    - [Archived Telemetry](#Archived Telemetry)
    - [Real time graphs](#Real time graphs)
    - [Telecommands](#telecommands)
    - [Telemetry](#telemetry)
- [Possible Issues](#Possible Issues)

## Installation

This project was generated with Angular CLI version 13.0.4.

- Requires Angular Material library --> Run `ng add @angular/material`

- Requires ngx-charts --> Run `npm i @swimlane/ngx-charts --save`

- To install required dependencies --> Run `npm install `

- In order to clone the application:

`git clone https://gitlab.com/acubesat/ops/frontend-software.git`

## Running Software. <a name="running software"></a>

To run the application, type in your terminal `ng serve`

The app will open at  `localhost:4200`

## Application description. <a name="Application description"></a>

This section covers a thorough description of the components of the application as well as instructions for the usage of its features. 

Your application consists of two main parts: the dashboard and the side navigation bar. 

### Dashboard <a name="Dashboard Page"></a>

![main_page](/application_screenshots/main_page.png)

Your dashboard is where your graphs and forms will be shown. It also includes some small explanatory paragraphs for a more straight forward navigation through the app. Furthermore a home and graph button exist to reroute to the refered components

### Side navigation bar <a name="side navigation bar"></a>

![side navigation bar](/application_screenshots/dashboard.png)

Your navigation bar contains all the functionalities of the application. It encapsules the necessary buttons to open graphs (archived and live) as well the abilities to send commands and display all the telemetered values of the received variables. Each of the aformentioned capabilites are described below. 


#### Archived Telemetry <a name="Archived Telemetry"></a>

![archived-telemetry](/application_screenshots/archived-telemetry.png)

The archived telemetry component can be used to show old data samples on a graph. The user can choose the variable, the start and stop time as well as the count which corresponds to the amount of intervals to use. After the selection of these options, the user submits the data as a query and a graph is being displayed.

In order to show Archived Graphs follow the next steps:

1. Open side navigation bar and press the archived telemetry button. A stepper will pop up.

2. Choose the File where your telemetry variable exists and find it either by checking all the variables or by searching it with the search bar

3. Choose the start and stop times and the count number for your archived telemetry. Below the start time field, there is a hint that corresponds to the minimum time you can insert. The same happens for the stop time field with the difference that the hint corresponds to maximum time you can insert. Be **extra careful** choosing them. Wrong range of time and a high number of count (step) will cause issues to the app. 

4. Send the query and press the button to show the graph. Your graph will be displayed on the main page

5. Press on the appeared graph to open it fully.

#### Real time graphs <a name="Real time graphs"></a>

![graph](/application_screenshots/graph.png)

The real time graph component is used to show the live value of the chosen parameter. The user picks a telemetry parameter from the dashboard and creates a component displaying it's real time value as well as a graph, if possible, depending on the variable's type. The user is able to choose multiple variables.

In order to open a Real-time Graph:

1. Open Dashboard and pick the file which contains the variable you want

2. Press the button which corresponds to the desired telemetry. Your Graph will appear on the screen

3. Press on the appeared graph to open it fully.

In order to remove a graph, press the red x at the top right corner of the graph.


#### Telecommands <a name="telecommands"></a>

This functionality is not yet implemented. Pressing the button on the Dashboard won't have any effect. It's future usage will cover sending commands to the satellite. 


#### Telemetry <a name="telemetry"></a>

This is an unfinished functionality. Pressing the button will unveil a table with all the telemetry parameters. Its usage will be to show real time values of mutliple variables 

## Possible issues <a name="Possible Issues"></a>

- **When I type ng serve errors occur on the terminal**

  Run --> `npm install`
  to download all the necessary dependencies

- **I pick a telemetry variable in archived telemetry and the start and stop time hints are not shown or shown with a weird format**

  The telemetry you have chosen has not got any samples inside. **Do not**  attempt to pick any time or submit the queries as an error will occur
