---
title: Configuraton Your Website
description: How to setup and configuration your website project.
date: 2025-01-19
info: Setup
image: /media/img/7003ce5ce93442be8655c06a8af59f91.webp
tags:
  - configuration
  - setup
---
Before your create static page or blog post article, for first you need to setup and configuration your site.

You can access on `config.yml` file and update meta title, description , favicon logo, language, locale, and others,on this area.

After your have update your site, you can generate sitemap by access on `yoursite.com/getsitemap.php`

For manual generate sitemap , open terminal and run this command `php generate_sitemap.php`

And your `sitemap.xml` is ready in your root project.

### Configuration Site URL Live Hosting

Site url on live online hosting . input your domain name , example

```
url: "https://myweb.com"
```

### Configuration Site URL LocalHost XAMPP / WAMPP / LAMPP

Site url on localhost . input your htdocs project name , example

```
url: "http://localhost/markdownuts"
```

### Configuration LocalHost with PHP built-in-webserver

Site url on localhost work with PHP built in server. remove and make empty url , example

```
url: ""
```

