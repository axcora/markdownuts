---
title: Run On Local
description: How to run markdownuts website project in to your localhost or local devices.
date: 2025-01-20
info: Local
image: /media/img/a56f3a9be83b4132a2ea712fc093ece5.webp
tags:
  - localhost
  - device
---
If you want to run in to your local device or localhost , you can download full source code using terminal or download main source code.

### Run with XAMPP / LAMPP / WAMPP

For first you can download full source code - [Download MarkDownuts Now](https://creativitaz.gumroad.com/l/markdownuts-starter)

Next you can upload your markdownuts source code in to your project folder 

```
htdocs/project
```

Now you can run start your Xampp / Lampp web server,and access 

```
locahost/yourproject
```

Next configure your site url , open `config.yml`

Add Site url on localhost . input your htdocs project name , example

```
url: "http://localhost/markdownuts"
```

### Run with PHP built-in-webserver

You can run with php built in server , download markdownuts project or you can use composer installation / git clone in to your project.

Next access your project with terminal and run

```
php -S localhost:8080 router.php
```

Now you can access `localhost:8080`

Next configure your site url , open `config.yml`

Add Site url on localhost . leave empty site url , example

```
url: ""
```

