<!-- PROJECT SHIELDS -->

[![PRETTIER](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://gitter.im/jlongster/prettie)
[![LICENSE](https://img.shields.io/github/license/arshadkazmi42/awesome-github-init.svg)](https://github.com/arshadkazmi42/awesome-github-init/LICENSE)
[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/erlanlucio/)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Flucioerlan%2FTask-Manager-Automation&count_bg=%23E71A18&title_bg=%23555555&icon=dependabot.svg&icon_color=%23E7E7E7&title=views&edge_flat=false)](https://hits.seeyoufarm.com)


<!-- PROJECT -->

<br /><br />

<p align="center">
  <h3 align="center">

  Task Manager Automation 🎪

  </h3> 
  <p align="center">
    <img width="80%" src="https://user-images.githubusercontent.com/67064886/134310232-de4ec2f5-8e75-4c2b-a3ec-dd46e1a4ad7f.gif" alt="Closing Service Logo" >
    <br />
    <br />
    <a href="https://github.com/lucioerlan/Task-Manager-Automation/issues">Report Bug</a>
    ·
    <a href="https://github.com/lucioerlan/Task-Manager-Automation/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## 🤔 About The Project

Basic CronTab, responsible for closing a list of services, from the Windows task manager, after reaching the maximum amount of memory allowed.

If you have questions about creating schedules, see [Cron](https://crontab.cronhub.io/).

<br />

---

<!-- INSTALLATION -->

## 🔨 Installation

You will need [Node.js](https://nodejs.org) version 10 or higher installed on your computer to continue.

```bash
git clone https://github.com/lucioerlan/Task-Manager-Automation.git

$ cd Task-Manager-Automation
$ npm install
```

<br />

---

<!-- SETUP -->

## 🔥 Setup

#### Copy or rename the file

<br />

```
$ cp .env.examples .env
```

**-** Located at the root of the project.

<br />

---

<!-- RUNNING TESTS -->

## 🤓 Running tests


```
$ npm run test
```

**-** Jest & Chai - Units

<br />

---

<!-- RUNNING -->

## 🎲 Running the application
```bash
# Run the application
$ npm run start

# A message appears written: Application in execution
```

<br />

---

<!-- PM2 -->

## 👨‍🔧 Running with PM2

**-** Run the service with pm2.

```bash
# PM2 Installation
$ npm install pm2 -g

# Run service with PM2
$ pm2 start pm2.config.js
```
<br />

---



<!-- DOCKER -->

## 🐳 Running with Docker

**-** Run the service with the docker.

```bash
# Download the Nodejs image and create the Container
$ docker-compose up
```

<br />

---

<!-- SERVICE NATIVE -->

## 🧨 Running with Windows service

**-** Run the service as a native windows service.
```bash
# To Install the Service
$ npm run install:service

# To Uninstall the Service
$ npm run uninstall:service
```
<br />

---


<!-- LICENSE -->

## 🔓 License

This project lives under MIT License. See LICENSE for more details. © - [Erlan Lucio](https://www.linkedin.com/in/erlanlucio/)

<br />
<!-- LICENSE -->

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png

<!-- MARKDOWN LINKS & IMAGES -->

