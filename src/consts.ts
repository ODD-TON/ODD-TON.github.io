// 站点名称、简介和全局链接统一放在这里维护。
// 首页里的大部分文案也直接从这里读取。
export const SITE_TITLE = '你好！我是小Ton';
export const SITE_DESCRIPTION = '一个记录文字 照片与日常灵感的个人博客';
export const SITE_URL = 'https://oddton.link';
export const SITE_AUTHOR = 'oddton';
export const SITE_BIO = '记录一点文字 几张照片 还有慢慢收集起来的日常片段';on
export const SITE_INTRO =
	'这里是小Ton的个人空间 首页放一段简单问候 更多故事会继续写进博客里。';

// 页脚社交图标由这份列表直接生成。
// 以后新增或删除联系方式，优先改这里。
export const SOCIAL_LINKS = [
	{ label: 'Email', href: 'mailto:hello@oddton.link', icon: 'mail' },
	{ label: 'RSS', href: '/rss.xml', icon: 'rss' },
] as const;
