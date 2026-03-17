import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// 所有博客文章统一放在 src/content/blog 下。
	// 这里同时允许 md 和 mdx，后续扩展内容形式会更方便。
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// frontmatter 字段保持精简，写新文章时不需要记太多配置。
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

export const collections = { blog };
