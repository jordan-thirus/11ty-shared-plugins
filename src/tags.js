export function tags(eleventyConfig) {
    
	eleventyConfig.addFilter("getKeys", function (target) {
		return Object.keys(target);
	});

	eleventyConfig.addFilter("filterTagList", function (tags) {
		return (tags || []).filter(tag => ["all", "posts"].indexOf(tag) === -1);
	});

	eleventyConfig.addFilter("sortAlphabetically", function (strings){
		return (strings || []).sort((b, a) => b.localeCompare(a))
	});

    eleventyConfig.addCollection('tagList', function (collection) {
		let tagSet = new Set();
		collection.getAll().forEach(function (item) {
		  if ('tags' in item.data) {
			let tags = item.data.tags;
	
			tags = tags.filter(function (item) {
			  switch (item) {
				case 'all':
				case 'nav':
				case 'post':
				case 'posts':
				  return false;
			  }
	
			  return true;
			});
	
			for (const tag of tags) {
			  tagSet.add(tag);
			}
		  }
		});
	
		return [...tagSet];
	  });
}