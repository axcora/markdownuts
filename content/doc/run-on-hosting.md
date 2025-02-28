---
title: Run On Hosting
description: How to run markdownuts website project in to your host.
date: 2025-01-20
info: Online
image: /media/img/c95425f44fac4338b62af1ec3a847046.webp
tags:
  - live
  - online
---
If you want to run in to your hosting , you can download full source code using terminal or download main source code.

### Download Markdownuts

For first you can download full source code - [Download MarkDownuts Now](https://creativitaz.gumroad.com/l/markdownuts-starter)

Next you can login in to your hosting panel , and upload full source code in to your project.

### Run with Composer

Composer Installation on your cloud / shared hosting, make sure your host support with terminal and composer, next you can access your project on sub domain , main domain or dir domain with terminal cli ,example on dir domain

```
cd/public_html/dirdomain
```

Next you can run change `project-name` with your project name

```
composer create-project creativitas/markdownuts project-name
```

Now your site is live and you can access on `https://yoursite/project-name`

### Configure Site URL

Open `config.yml` file and add your site url.

Site url on live online hosting . input your domain name , example

```
url: "https://myweb.com"
```

