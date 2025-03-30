import { DateTime } from "luxon";

export function dateFilters(eleventyConfig) {
	eleventyConfig.addAsyncFilter('readableDate', async function (dateObj, format, zone) {
        // Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
        return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "dd LLLL yyyy");
    }
    );

	// Filter to parse dates
	eleventyConfig.addAsyncFilter("htmlDateString", async function (dateObj) {
		return DateTime.fromJSDate(dateObj, {
			zone: "utc",
		}).toFormat("yyyy-LL-dd");
	});
}