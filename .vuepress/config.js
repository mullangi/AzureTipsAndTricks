const currentDateUTC = new Date().toUTCString()

module.exports = {
	title: 'Azure Tips and Tricks',
	dest: './public',
	base: '/AzureTipsAndTricks/',
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		domain: 'http://azuredev.tips',
		displayAllHeaders: true,
		sidebar: 'auto',
		searchMaxSuggestions: 10,
		repo: 'microsoft/azuretipsandtricks',
		repoLabel: 'Star this Repo',
		editLinks: true,
		editLinkText: 'Edit this page on GitHub',
		logo: '/files/vintage.png',
		sidebar: [
			{
				title: 'Home',
				collapsable: false,   
				children: [
					'/'
				]
			},
			{
				title: 'Tips',
				collapsable: false
			},
			{
				title: 'Recently Added',
				collapsable: false,
children: ['/blog/tip269','/blog/tip268','/blog/tip267','/blog/tip266','/blog/tip265','/blog/tip264','/blog/tip262']
			},
			{
				title: '.NET',
				collapsable: true,
				children: ['/blog/tip259','/blog/tip228','/blog/tip113','/blog/tip144','/blog/tip54', '/blog/tip55', '/blog/tip56', '/blog/tip68']
			},	
			{
				title: 'Active Directory',
				collapsable: true,
				children: ['/blog/tip184']
			},
			{
				title: 'Activity Log',
				collapsable: true,
				children: ['/blog/tip155']
			},
			{
				title: 'Advisor',
				collapsable: true,
				children: ['/blog/tip173']
			},
			{
				title: 'App Configuration',
				collapsable: true,
				children: ['/blog/tip222']
			},
			{
				title: 'App Service',
				collapsable: true,
				children: ['/blog/tip19', '/blog/tip111','/blog/tip236','/blog/tip232','/blog/tip218','/blog/tip216','/blog/tip208','/blog/tip16', '/blog/tip20', '/blog/tip21', '/blog/tip22', '/blog/tip23', '/blog/tip26', '/blog/tip27', '/blog/tip28', '/blog/tip29', '/blog/tip30', '/blog/tip31', '/blog/tip32', '/blog/tip33',
					'/blog/tip101', '/blog/tip102', '/blog/tip103', '/blog/tip104', '/blog/tip105', '/blog/tip107', '/blog/tip108', '/blog/tip109', '/blog/tip110',
					'/blog/tip112', '/blog/tip113', '/blog/tip117', '/blog/tip119', '/blog/tip132', '/blog/tip143',
					'/blog/tip144', '/blog/tip149', '/blog/tip184','/blog/tip131','/blog/tip58', '/blog/tip134','/blog/tip135']
			},
			{
				title: 'APIM',
				collapsable: true,
				children: ['/blog/tip197','/blog/tip223']
			},
			{
				title: 'ASP.NET',
				collapsable: true,
				children: ['/blog/tip216','/blog/tip222','/blog/tip132','/blog/tip90']
			},
			{
				title: 'Authentication',
				collapsable: true,
				children: ['/blog/tip190']
			},
			{
				title: 'Automation',
				collapsable: true,
				children: ['/blog/tip194']
			},
			{
				title: 'Availability Zones',
				collapsable: true,
				children: ['/blog/tip234']
			},
			{
				title: 'AzCopy',
				collapsable: true,
				children: ['/blog/tip81',
					'/blog/tip139']
			},
			{
				title: 'Blueprints',
				collapsable: true,
				children: ['/blog/tip210']
			},
			{
				title: 'CDN',
				collapsable: true,
				children: ['/blog/tip203']
			},
			{
				title: 'CLI',
				collapsable: true,
				children: ['/blog/tip257','/blog/tip200','/blog/tip199','/blog/tip7', '/blog/tip8', '/blog/tip19', '/blog/tip34', '/blog/tip111']
			},
			{
				title: 'Cloud Shell',
				collapsable: true,
				children: ['/blog/tip11', '/blog/tip13', '/blog/tip14', '/blog/tip15', '/blog/tip17', '/blog/tip49', '/blog/tip69', '/blog/tip127', '/blog/tip131', '/blog/tip142','/blog/tip198']
			},
			{
				title: 'Cognitive Services',
				collapsable: true,
				children: ['/blog/tip70', '/blog/tip71', '/blog/tip72', '/blog/tip129', '/blog/tip154']
			},
			{
				title: 'Containers',
				collapsable: true,
				children: ['/blog/tip236','/blog/tip45', '/blog/tip46', '/blog/tip47', '/blog/tip48', '/blog/tip54', '/blog/tip55', '/blog/tip56', '/blog/tip57', '/blog/tip58', '/blog/tip60','/blog/tip218','/blog/tip53']
			},
			{
				title: 'Cosmos DB',
				collapsable: true,
				children: ['/blog/tip204','/blog/tip185', '/blog/tip65', '/blog/tip66', '/blog/tip67', '/blog/tip68', '/blog/tip152', '/blog/tip166', '/blog/tip167', '/blog/tip159']
			},	
			{
				title: 'Data Share',
				collapsable: true,
				children: ['/blog/tip225']
			},
			{
				title: 'Data Studio',
				collapsable: true,
				children: ['/blog/tip244']
			},
			{
				title: 'DevOps',
				collapsable: true,
				children: ['/blog/tip237','/blog/tip233','/blog/tip206','/blog/tip168','/blog/tip169','/blog/tip101','/blog/tip102','/blog/tip103','/blog/tip104','/blog/tip105','/blog/tip107','/blog/tip108','/blog/tip109','/blog/tip110']
			},			
			{
				title: 'Dev Spaces',
				collapsable: true,
				children: ['/blog/tip230','/blog/tip228','/blog/tip229']
			},
			{
				title: 'Front Door',
				collapsable: true,
				children: ['/blog/tip192']
			},
			{
				title: 'Functions',
				collapsable: true,
				children: ['/blog/tip260','/blog/tip247','/blog/tip211','/blog/tip196','/blog/tip35', '/blog/tip36', '/blog/tip50', '/blog/tip51', '/blog/tip52', '/blog/tip61', '/blog/tip62', '/blog/tip63', '/blog/tip64', '/blog/tip94', '/blog/tip97', '/blog/tip98', '/blog/tip99', '/blog/tip100', '/blog/tip130', '/blog/tip133', '/blog/tip134', '/blog/tip135', '/blog/tip136', '/blog/tip147', '/blog/tip148', '/blog/tip157', '/blog/tip158', '/blog/tip161','/blog/tip125','/blog/tip174', '/blog/tip175']
			},
			{
				title: 'GitHub',
				collapsable: true,
				children: ['/blog/tip233','/blog/tip16','/blog/tip115' ]
			},
			{
				title: 'HD Insight',
				collapsable: true,
				children: ['/blog/tip172']
},
			{
				title: 'Information Protection',
				collapsable: true,
				children: ['/blog/tip177']
			},
			{
				title: 'iOS',
				collapsable: true,
				children: ['/blog/tip188', '/blog/tip187']
			},
			{
				title: 'IoT',
				collapsable: true,
				children: ['/blog/tip96', '/blog/tip114', '/blog/tip122', '/blog/tip123', '/blog/tip124', '/blog/tip125', '/blog/tip126']
			},
			{
				title: 'Java',
				collapsable: true,
				children: ['/blog/tip264']
			},
			{
				title: 'JavaScript',
				collapsable: true,
				children: ['/blog/tip227','/blog/tip204']
			},
			{
				title: 'Key Vault',
				collapsable: true,
				children: ['/blog/tip180', '/blog/tip181','/blog/tip115']
			},
			{
				title: 'Kubernetes',
				collapsable: true,
				children: ['/blog/tip261','/blog/tip245','/blog/tip234','/blog/tip230','/blog/tip229','/blog/tip228','/blog/tip168','/blog/tip169']
			},
			{
				title: 'Lab Services',
				collapsable: true,
				children: ['/blog/tip176']
			},
			{
				title: 'Logic Apps',
				collapsable: true,
				children: ['/blog/tip227','/blog/tip37', '/blog/tip38', '/blog/tip39', '/blog/tip40', '/blog/tip41', '/blog/tip42', '/blog/tip43', '/blog/tip44', '/blog/tip156', '/blog/tip159','/blog/tip124','/blog/tip125']
			},
			{
				title: 'Machine Learning',
				collapsable: true,
				children: ['/blog/tip202', '/blog/tip189', '/blog/tip174', '/blog/tip175']
			},
			{
				title: 'Media Services',
				collapsable: true,
				children: ['/blog/tip178',
					'/blog/tip179']
			},	
			{
				title: 'Migrate',
				collapsable: true,
				children: ['/blog/tip232','/blog/tip66', '/blog/tip167']
			},			
			{
				title: 'Monitor',
				collapsable: true,
				children: ['/blog/tip32']
			},
			{
				title: 'Node.js',
				collapsable: true,
				children: ['/blog/tip237','/blog/tip168','/blog/tip169']
			},					
			{
				title: 'Pipeline',
				collapsable: true,
				children: ['/blog/tip237']
			},
			{
				title: 'Portal',
				collapsable: true,
				children: ['/blog/tip1', '/blog/tip2', '/blog/tip3', '/blog/tip4', '/blog/tip5', '/blog/tip6', '/blog/tip116', '/blog/tip70', '/blog/tip129', '/blog/tip97','/blog/tip73','/blog/tip133','/blog/tip150','/blog/tip74']
			},
			{
				title: 'PowerShell',
				collapsable: true,
				children: ['/blog/tip244','/blog/tip211','/blog/tip198', '/blog/tip194', '/blog/tip24', '/blog/tip120', '/blog/tip137', '/blog/tip149','/blog/tip17']
			},
			{
				title: 'Productivity',
				collapsable: true,
				children: ['/blog/tip215','/blog/tip214','/blog/tip213','/blog/tip18', '/blog/tip25', '/blog/tip115', '/blog/tip128', '/blog/tip150', '/blog/tip153', '/blog/tip155', '/blog/tip162', '/blog/tip163', '/blog/tip164', '/blog/tip173', '/blog/tip176', '/blog/tip177', '/blog/tip183']
			},	
			{
				title: 'Resource Manager',
				collapsable: true,
				children: ['/blog/tip167','/blog/tip114','/blog/tip38','/blog/tip137','/blog/tip18','/blog/tip25','/blog/tip162','/blog/tip163','/blog/tip164']
			},
			{
				title: 'SAP',
				collapsable: true,
				children: ['/blog/tip170', '/blog/tip171']
			},
			{
				title: 'SDKs',
				collapsable: true,
				children: ['/blog/tip193','/blog/tip218']
			},
			{
				title: 'Search',
				collapsable: true,
				children: ['/blog/tip91','/blog/tip92','/blog/tip93','/blog/tip90']
			},
			{
				title: 'SendGrid',
				collapsable: true,
				children: ['/blog/tip73']
			},
			{
				title: 'SignalR',
				collapsable: true,
				children: ['/blog/tip243','/blog/tip186']
			},
			{
				title: 'SQL',
				collapsable: true,
				children: ['/blog/tip90', '/blog/tip91', '/blog/tip92', '/blog/tip93', '/blog/tip140', '/blog/tip145', '/blog/tip146','/blog/tip101','/blog/tip102','/blog/tip103','/blog/tip104','/blog/tip105','/blog/tip107','/blog/tip108','/blog/tip109','/blog/tip110', '/blog/tip147','/blog/tip156']
			},
			{
				title: 'Storage',
				collapsable: true,
				children: ['/blog/tip212','/blog/tip74', '/blog/tip75', '/blog/tip76', '/blog/tip77', '/blog/tip78', '/blog/tip79', '/blog/tip80', '/blog/tip81', '/blog/tip82', '/blog/tip83', '/blog/tip84', '/blog/tip85', '/blog/tip86', '/blog/tip87', '/blog/tip88', '/blog/tip89', '/blog/tip95', '/blog/tip138', '/blog/tip141', '/blog/tip225', '/blog/tip220', '/blog/tip221','/blog/tip166', '/blog/tip97','/blog/tip135', '/blog/tip157','/blog/tip158']
			},
			{
				title: 'Virtual Machines',
				collapsable: true,
				children: ['/blog/tip235','/blog/tip209','/blog/tip207','/blog/tip201', '/blog/tip191', '/blog/tip9', '/blog/tip10', '/blog/tip12', '/blog/tip53', '/blog/tip226','/blog/tip208','/blog/tip14', '/blog/tip215']
			},
			{
				title: 'Visual Studio Family',
				collapsable: true,
				children: ['/blog/tip248','/blog/tip49','/blog/tip65','/blog/tip50','/blog/tip51','/blog/tip52','/blog/tip61','/blog/tip63','/blog/tip130', '/blog/tip43','/blog/tip44','/blog/tip202', '/blog/tip120']
			},
			{

				title: 'VNET',
				collapsable: true,
				children: ['/blog/tip182','/blog/tip224']
			},
		],
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Videos', link: 'http://videos.azuredev.tips' },
			{ text: 'Developer Live Streaming', link: 'http://twitch.tv/mbcrump' },
			{ text: 'Questions?', link: 'https://github.com/Microsoft/AzureTipsAndTricks/issues/' },
			{ text: 'RSS Feed', link: 'https://microsoft.github.io/AzureTipsAndTricks/rss.xml' }
		]//,
		//	logo: '/vintage.png'
	},
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: 'UA-17277477-4' // UA-00000000-0
			}
		],
		[
			'@vuepress/search',
			{
				searchMaxSuggestions: 10
			}
		],
		[
			'vuepress-plugin-rss',
			{
				base_url: '/',
				site_url: 'https://microsoft.github.io/AzureTipsAndTricks',
				copyright: '2019 Microsoft',
				filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
				count: 20
			}
		],
		'vuepress-plugin-janitor'
	],
	head: [
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' }
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' }
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' }
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' }
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '114x114',
				href: '/apple-icon-114x114.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '120x120',
				href: '/apple-icon-120x120.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '144x144',
				href: '/apple-icon-144x144.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '152x152',
				href: '/apple-icon-152x152.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-icon-180x180.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '192x192',
				href: '/android-icon-192x192.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '96x96',
				href: '/favicon-96x96.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png'
			}
		],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
		[
			'meta',
			{ name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }
		],
		['meta', { name: 'theme-color', content: '#ffffff' }],
		['script', { async: true, src: "https://platform.twitter.com/widgets.js", charset: "utf-8" }]
	]
}
