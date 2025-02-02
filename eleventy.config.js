import { IdAttributePlugin, InputPathToUrlTransformPlugin, HtmlBasePlugin } from "@11ty/eleventy";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginNavigation from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import CleanCSS from "clean-css";
import yaml from "js-yaml";
import fs from 'node:fs';
import path from 'node:path';
import embedYouTube from "eleventy-plugin-youtube-embed";
import pluginFilters from "./_config/filters.js";
export default async function(eleventyConfig) {
	eleventyConfig
		.addPassthroughCopy({
			"./public/": "/",
			"./content/media/": "/",
			"./node_modules/prismjs/themes/prism-okaidia.css": "/css/prism-okaidia.css"
		})
		.addPassthroughCopy("./content/feed/pretty-atom-feed.xsl");
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");
	eleventyConfig.addBundle("css");
	eleventyConfig.addBundle("js");
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 }
	});
eleventyConfig.addPlugin(embedYouTube, {
  lite: true
});
eleventyConfig.addCollection("images", function() {
  const imageDir = path.join('content', 'media', 'img', 'gallery');
  return fs.readdirSync(imageDir)
    .filter(file => ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(path.extname(file).toLowerCase()))
    .map(file => ({
      name: path.parse(file).name,
      src: `/media/img/gallery/${file}`,
      alt: path.parse(file).name,
      description: `Description for ${path.parse(file).name}` // Tambahkan deskripsi unik jika diperlukan
    }));
});

eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
eleventyConfig.addPassthroughCopy("content/media/img/gallery");

	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(HtmlBasePlugin);
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
	eleventyConfig.addPlugin(feedPlugin, {
		outputPath: "/feed/feed.xml",
		stylesheet: "pretty-atom-feed.xsl",
		templateData: {
			eleventyNavigation: {
				key: "Feed",
				order: 3
			}
		},
		collection: {
			name: "posts",
			limit: 10,
		},
		metadata: {
			language: "en",
			title: "MarkDownuts",
			subtitle: "Next PHP Website Generation - Markdown YAML frontmatter in PHP - Flatfile CMS A Static Site Generator Alternative",
			base: "https://markdownuts.axcora.com/",
			author: {
				name: "Axcora"
			}
		}
	});

	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		extensions: "html",
		formats: ["avif", "webp", "auto"],
		defaultAttributes: {
			loading: "lazy",
			decoding: "async",
		}
	});
	eleventyConfig.addFilter("cssmin", function (code) {
		return new CleanCSS({}).minify(code).styles;
	});
	eleventyConfig.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});
    eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
	eleventyConfig.addPlugin(pluginFilters);
	eleventyConfig.addPlugin(IdAttributePlugin, {
	});
	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});
	eleventyConfig.addShortcode("currentBuildDate", () => {
		return (new Date()).toISOString();
	});
};

export const config = {
	templateFormats: [
		"md",
		"njk",
		"html",
		"liquid",
		"11ty.js",
	],
	markdownTemplateEngine: "njk",
	htmlTemplateEngine: "njk",
	dir: {
		input: "content",
		includes: "../_includes",
		data: "../_data",
		output: "_site"
	},
};
